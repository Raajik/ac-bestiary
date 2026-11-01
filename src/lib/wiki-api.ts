// The MediaWiki API of the ACCPP Wiki on lohk, as the snapshot tool reads it.
//
// The wiki is slow (about 1.5 s for each rendered page), so every request goes
// through one limit of 2 at a time (spec wiki-app.md, "Sources").

/** The calls the snapshot makes. The tests use one shared fake of it (tests/fake-wiki-api.ts). */
export interface WikiApi {
  /** One `api.php` call; `format=json&formatversion=2` is added. Gives the parsed reply. */
  get(params: Record<string, string>): Promise<unknown>;
  /** The bytes of an image, by the URL `prop=imageinfo` gave. */
  download(url: string): Promise<Uint8Array>;
}

/** Run at most `count` of the jobs at a time. */
export function limiter(count: number): <T>(job: () => Promise<T>) => Promise<T> {
  let running = 0;
  const waiting: (() => void)[] = [];

  return async <T>(job: () => Promise<T>): Promise<T> => {
    while (running >= count) await new Promise<void>((resolve) => waiting.push(resolve));
    running++;
    try {
      return await job();
    } finally {
      running--;
      waiting.shift()?.();
    }
  };
}

const TIMEOUT_MS = 60_000;
const TRIES = 3;

export class HttpWikiApi implements WikiApi {
  private readonly limit = limiter(2);

  constructor(private readonly apiUrl: string) {}

  get(params: Record<string, string>): Promise<unknown> {
    const query = new URLSearchParams({ ...params, format: 'json', formatversion: '2' });
    return this.fetch(`${this.apiUrl}?${query}`, async (res) => {
      const body = (await res.json()) as { error?: { code: string; info: string } };
      if (body.error) throw new Error(`wiki API error ${body.error.code}: ${body.error.info}`);
      return body;
    });
  }

  download(url: string): Promise<Uint8Array> {
    return this.fetch(url, async (res) => new Uint8Array(await res.arrayBuffer()));
  }

  private fetch<T>(url: string, read: (res: Response) => Promise<T>): Promise<T> {
    return this.limit(async () => {
      let lastError: unknown;
      for (let attempt = 1; attempt <= TRIES; attempt++) {
        try {
          const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
          if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
          return await read(res);
        } catch (error) {
          lastError = error;
          // Back off before the next try, so a busy wiki gets room.
          if (attempt < TRIES) await new Promise((resolve) => setTimeout(resolve, 2000 * attempt));
        }
      }
      throw lastError;
    });
  }
}

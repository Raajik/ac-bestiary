// The one shared fake of the wiki API (testkit pattern 1). It serves the
// replies tools/record-wiki-fixture.ts recorded from the lohk wiki, by request.

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { WikiApi } from '../src/lib/wiki-api.js';

export const WIKI_FIXTURE = join(import.meta.dirname, 'fixtures', 'wiki');

/** The key of a request: its parameters, sorted. The recorder uses the same key. */
export function requestKey(params: Record<string, string>): string {
  return Object.keys(params)
    .sort()
    .map((name) => `${name}=${params[name]}`)
    .join('&');
}

export class FakeWikiApi implements WikiApi {
  private readonly index: Record<string, string>;
  private readonly overrides = new Map<string, unknown>();
  /** Every call, in order: the request key, or `download <url>`. */
  readonly calls: string[] = [];

  constructor(private readonly dir = WIKI_FIXTURE) {
    this.index = JSON.parse(readFileSync(join(dir, 'index.json'), 'utf8'));
  }

  /** The recorded reply of a request. */
  reply(params: Record<string, string>): unknown {
    const key = requestKey(params);
    if (this.overrides.has(key)) return structuredClone(this.overrides.get(key));
    const file = this.index[key];
    if (!file) throw new Error(`no recorded reply for ${key}`);
    return JSON.parse(readFileSync(join(this.dir, file), 'utf8'));
  }

  /** Serve another reply for a request from now on. */
  override(params: Record<string, string>, reply: unknown): void {
    this.overrides.set(requestKey(params), reply);
  }

  async get(params: Record<string, string>): Promise<unknown> {
    this.calls.push(requestKey(params));
    return this.reply(params);
  }

  async download(url: string): Promise<Uint8Array> {
    this.calls.push(`download ${url}`);
    const file = this.index[`download ${url}`];
    if (!file) throw new Error(`no recorded download for ${url}`);
    return new Uint8Array(readFileSync(join(this.dir, file)));
  }
}

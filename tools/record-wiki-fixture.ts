// Record the wiki replies the snapshot tests replay (tests/fake-wiki-api.ts).
//
// It runs the snapshot from "Bow of the Quiddity" against the lohk wiki and
// saves each reply. To keep the fixture small it trims, in the saved replies
// only: the links of the pages to a few that test the crawl rule, and the images
// to the two bows' icons.
//
// Run on the LAN: npx tsx tools/record-wiki-fixture.ts

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { requestKey, WIKI_FIXTURE } from '../tests/fake-wiki-api.js';
import { openSnapshot, runSnapshot } from '../src/lib/snapshot.js';
import { WIKI_API } from '../src/lib/paths.js';
import { HttpWikiApi, type WikiApi } from '../src/lib/wiki-api.js';

const API = WIKI_API;

/** The links kept for each page whose links the crawl follows. */
const KEEP_LINKS: Record<string, string[] | 'all'> = {
  // An NPC (not followed), a spell redirect, and an item page (followed one step).
  'Bow of the Quiddity': ['Crafter of Bows', 'Aura of Defender IV', 'Enhanced Bow of the Quiddity'],
  // A link back, a list page and an item page, both at level 2.
  'Enhanced Bow of the Quiddity': ['Bow of the Quiddity', 'Quiddity Weapons', 'Weapon Upgrade Kit'],
  // Pages whose links the crawl must not follow keep all their links, so a crawl that wrongly follows them asks
  // the fake for a reply it never recorded.
  'Crafter of Bows': 'all',
  'Quiddity Weapons': 'all',
  'Weapon Upgrade Kit': 'all',
};

/** The only images kept: the two bows' icons. */
const KEEP_IMAGES = ['Bow_of_the_Quiddity_Icon.png', 'Enhanced_Bow_of_the_Quiddity_Icon.png'];

class Recorder implements WikiApi {
  readonly index: Record<string, string> = {};
  private count = 0;

  constructor(private readonly real: WikiApi) {}

  private save(key: string, name: string, data: string | Uint8Array): void {
    writeFileSync(join(WIKI_FIXTURE, name), data);
    this.index[key] = name;
  }

  async get(params: Record<string, string>): Promise<unknown> {
    const reply = (await this.real.get(params)) as {
      parse?: { title: string; links: { title: string }[]; images: string[] };
    };
    if (reply.parse) {
      const keep = KEEP_LINKS[reply.parse.title];
      if (keep !== 'all') reply.parse.links = keep ? reply.parse.links.filter((l) => keep.includes(l.title)) : [];
      reply.parse.images = reply.parse.images.filter((name) => KEEP_IMAGES.includes(name));
    }
    this.count++;
    this.save(requestKey(params), `${String(this.count).padStart(2, '0')}-${params.action}.json`, JSON.stringify(reply, null, 1));
    return reply;
  }

  async download(url: string): Promise<Uint8Array> {
    const bytes = await this.real.download(url);
    this.count++;
    this.save(`download ${url}`, `${String(this.count).padStart(2, '0')}-${url.split('/').pop()}`, bytes);
    return bytes;
  }
}

rmSync(WIKI_FIXTURE, { recursive: true, force: true });
mkdirSync(WIKI_FIXTURE, { recursive: true });
const work = join(tmpdir(), `wiki-fixture-${process.pid}`);
mkdirSync(work, { recursive: true });

const recorder = new Recorder(new HttpWikiApi(API));
const result = await runSnapshot(recorder, openSnapshot(join(work, 'wiki.sqlite')), ['Bow of the Quiddity'], {
  imagesDir: join(work, 'images'),
  log: console.log,
});
writeFileSync(join(WIKI_FIXTURE, 'index.json'), JSON.stringify(recorder.index, null, 1));
rmSync(work, { recursive: true, force: true });
console.log(result);

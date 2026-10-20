// Where the build reads its sources.
//
// Every path can be set with an environment variable, so the build also runs
// on another machine.

import { homedir } from 'node:os';
import { join } from 'node:path';

const home = homedir();

function fromEnv(name: string, fallback: string): string {
  const value = process.env[name];
  return value && value.length > 0 ? value : fallback;
}

/** The AC Emulator world database patches (the retail weenie SQL). */
export const PATCH_ROOT = fromEnv(
  'AC_PATCH_ROOT',
  join(home, 'Projects/asherons-call/_refs/ACE-World-16PY-Patches/Database/Patches/9 WeenieDefaults'),
);

/** The AC Emulator base world database (the retail weenie SQL before patches). */
export const BASE_ROOT = fromEnv(
  'AC_BASE_ROOT',
  join(home, 'Projects/asherons-call/_refs/ACE-World-16PY/Database/3-Core/9 WeenieDefaults/SQL'),
);

/** The saved ACPedia page. The build never fetches acpedia.org. */
export const ACPEDIA_PAGE = fromEnv('AC_ACPEDIA_PAGE', join(home, 'wiki/raw/acpedia/Tusker.md'));

/** The retail client data. Holds the models, the icons and the game tables. */
export const PORTAL_DAT = fromEnv(
  'AC_PORTAL_DAT',
  join(home, 'Games/AsheronsCall/Client/client_portal.dat'),
);

/** The output directory of the build. */
export const DIST_DIR = fromEnv('AC_DIST_DIR', join(import.meta.dirname, '../../dist'));

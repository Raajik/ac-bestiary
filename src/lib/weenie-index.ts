// Index the retail weenie SQL files by class id.

import { readdirSync } from 'node:fs';
import { join } from 'node:path';

/** Every weenie SQL file under the given roots, by class id. */
export function indexWeenies(roots: string[]): Map<number, string> {
  const byId = new Map<number, string>();

  const walk = (dir: string) => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(path);
        continue;
      }
      if (!entry.name.endsWith('.sql')) continue;
      const classId = Number.parseInt(entry.name, 10);
      if (!Number.isFinite(classId)) continue;
      byId.set(classId, path);
    }
  };

  for (const root of roots) walk(root);
  return byId;
}

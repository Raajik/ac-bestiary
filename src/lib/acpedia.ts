// Read the saved ACPedia creature page.
//
// The page is a MediaWiki dump, saved once at ~/wiki/raw/acpedia/Tusker.md.
// The build must not fetch acpedia.org again. The "Stats" and "Subclassed"
// tables give the creature list, the level, the XP award, the health, the
// defense values ACPedia lists and the trophies.

export interface AcpediaEntry {
  name: string;
  /** The table the row came from. */
  table: 'Stats' | 'Subclassed';
  level: number | null;
  xp: number | null;
  meleeDefense: number | null;
  missileDefense: number | null;
  magicDefense: number | null;
  health: number | null;
  loot: number | null;
  /** Trophy names, taken from the icon file names. */
  trophies: string[];
}

/** Split a table row on the pipes that are not escaped. */
function splitRow(line: string): string[] {
  const cells: string[] = [];
  let current = '';

  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '\\' && line[i + 1] === '|') {
      current += '|';
      i++;
      continue;
    }
    if (c === '|') {
      cells.push(current);
      current = '';
      continue;
    }
    current += c;
  }

  cells.push(current);
  return cells.map((cell) => cell.trim());
}

/** The name in a `[[Name|Name]]` or `[[Name]]` cell. */
function linkName(cell: string): string {
  const match = cell.match(/\[\[([^\]|]+)/);
  return match ? match[1].trim() : cell.replace(/^\[\[|\]\]$/g, '').trim();
}

/** The trophy names in the last cell of a row. */
function trophyNames(cell: string): string[] {
  if (cell === '' || /^none$/i.test(cell)) return [];
  const names: string[] = [];

  for (const match of cell.matchAll(/!\[[^\]]*\]\([^)]*\)/g)) {
    const file = match[0].match(/\(([^)]*)\)/)?.[1] ?? '';
    const fileName = file.split('/').pop() ?? file;
    const name = fileName.replace(/[_%]/g, ' ').replace(/\s*Icon\.png$/i, '').trim();
    if (name) names.push(name);
  }

  return names;
}

function toInt(text: string): number | null {
  const cleaned = text.replace(/,/g, '').trim();
  if (cleaned === '') return null;
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : null;
}

/**
 * Read the Stats and Subclassed tables of a saved ACPedia page.
 */
export function readAcpediaPage(markdown: string): AcpediaEntry[] {
  const entries: AcpediaEntry[] = [];
  const lines = markdown.split('\n');

  let table: 'Stats' | 'Subclassed' | null = null;
  let inTable = false;

  for (const line of lines) {
    const heading = line.match(/^##\s+(.*)$/);
    if (heading) {
      const name = heading[1].trim();
      if (name === 'Stats' || name === 'Subclassed') {
        table = name;
        inTable = false;
      } else {
        table = null;
      }
      continue;
    }

    if (!table) continue;

    if (!line.startsWith('|')) {
      inTable = false;
      continue;
    }

    if (!inTable) {
      // The first line of a table is the header, the second the separator.
      inTable = true;
      if (/^\|\s*-{2,}/.test(line)) continue;
      if (/Lvl/.test(line)) continue;
    }

    // A MediaWiki row starts and ends with a pipe, so the first cell is empty.
    const cells = splitRow(line);
    if (cells[0] === '') cells.shift();
    if (cells.length < 7) continue;

    const name = linkName(cells[0]);
    if (!name || /^-{2,}$/.test(name)) continue;

    entries.push({
      name,
      table,
      level: toInt(cells[1] ?? ''),
      xp: toInt(cells[2] ?? ''),
      meleeDefense: toInt(cells[3] ?? ''),
      missileDefense: toInt(cells[4] ?? ''),
      magicDefense: toInt(cells[5] ?? ''),
      health: toInt(cells[6] ?? ''),
      loot: toInt(cells[7] ?? ''),
      trophies: trophyNames(cells[8] ?? ''),
    });
  }

  return entries;
}

/** The ACPedia page address for a name. */
export function acpediaUrl(name: string): string {
  return `https://acpedia.org/wiki/${name.replace(/ /g, '_')}`;
}

// A small reader for the retail weenie SQL dumps.
//
// The dumps are MySQL INSERT statements with one row per value tuple. The
// values are numbers, hex numbers, quoted strings or NULL, and a string can
// contain a comma or a quote. The reader below splits a value tuple on the
// commas that are not inside a quoted string.

export type SqlValue = string | number | null;

export interface SqlRow {
  [column: string]: SqlValue;
}

/** Split one value tuple on the commas that are not inside a quoted string. */
export function splitTuple(text: string): string[] {
  const parts: string[] = [];
  let current = '';
  let inString = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];

    if (inString) {
      if (c === '\\') {
        current += c + (text[i + 1] ?? '');
        i++;
        continue;
      }
      if (c === "'") {
        if (text[i + 1] === "'") {
          current += "''";
          i++;
          continue;
        }
        inString = false;
        current += c;
        continue;
      }
      current += c;
      continue;
    }

    if (c === "'") {
      inString = true;
      current += c;
      continue;
    }

    if (c === ',') {
      parts.push(current);
      current = '';
      continue;
    }

    current += c;
  }

  parts.push(current);
  return parts.map((p) => p.trim());
}

/** Turn one raw value into a number, a string or null. */
export function parseValue(raw: string): SqlValue {
  const text = raw.trim();

  if (text === '' || text.toUpperCase() === 'NULL') return null;

  if (text.startsWith("'")) {
    const inner = text.slice(1, text.endsWith("'") ? -1 : undefined);
    return inner.replace(/''/g, "'").replace(/\\'/g, "'").replace(/\\n/g, '\n');
  }

  if (/^0x[0-9a-fA-F]+$/.test(text)) return parseInt(text, 16);

  if (/^-?\d+$/.test(text)) return parseInt(text, 10);

  if (/^-?\d*\.\d+$/.test(text)) return parseFloat(text);

  return text;
}

/**
 * Read every row of one table from a weenie SQL file.
 * The table name is the ACE table name, for example `weenie_properties_skill`.
 */
export function readTable(sql: string, table: string): SqlRow[] {
  const pattern = new RegExp(
    `INSERT INTO \`${table}\`\\s*\\(([^)]*)\\)\\s*VALUES([\\s\\S]*?);\\s*\\n`,
    'g',
  );

  const rows: SqlRow[] = [];
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(sql)) !== null) {
    const columns = match[1].split(',').map((c) => c.trim().replace(/`/g, ''));
    const body = match[2];

    for (const tuple of body.matchAll(/\(([^()]*)\)/g)) {
      const values = splitTuple(tuple[1]);
      if (values.length !== columns.length) continue;
      const row: SqlRow = {};
      columns.forEach((column, i) => {
        row[column] = parseValue(values[i]);
      });
      rows.push(row);
    }
  }

  return rows;
}

/** Read the class id of a weenie SQL file, from the `weenie` table. */
export function readClassId(sql: string): number | null {
  const match = sql.match(/INSERT INTO `weenie`\s*\(`class_Id`[^)]*\)\s*VALUES\s*\(\s*(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

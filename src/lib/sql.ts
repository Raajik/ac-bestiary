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

    for (const tuple of valueTuples(body)) {
      const values = splitTuple(tuple);
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

/**
 * Find the text of each value tuple in a VALUES body. A bracket in a quoted
 * string, for example a name like "Shard (Level 180+)", does not end a tuple.
 * The reader skips the comments after each row.
 */
export function valueTuples(body: string): string[] {
  const tuples: string[] = [];
  let start = -1;
  let inString = false;

  for (let i = 0; i < body.length; i++) {
    const c = body[i];

    if (inString) {
      if (c === '\\') i++;
      else if (c === "'" && body[i + 1] === "'") i++;
      else if (c === "'") inString = false;
    } else if (c === '/' && body[i + 1] === '*') {
      const end = body.indexOf('*/', i + 2);
      i = end < 0 ? body.length : end + 1;
    } else if (c === "'") {
      inString = true;
    } else if (c === '(' && start < 0) {
      start = i + 1;
    } else if (c === ')' && start >= 0) {
      tuples.push(body.slice(start, i));
      start = -1;
    }
  }

  return tuples;
}

/** Read the class id of a weenie SQL file, from the `weenie` table. */
export function readClassId(sql: string): number | null {
  const match = sql.match(/INSERT INTO `weenie`\s*\(`class_Id`[^)]*\)\s*VALUES\s*\(\s*(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

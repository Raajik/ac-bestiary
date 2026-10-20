import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { readTable } from '../src/lib/sql.js';

describe('the SQL reader', () => {
  it('reads a string with brackets and skips the row comments', () => {
    const sql = readFileSync(join(import.meta.dirname, 'fixtures', 'brackets.sql'), 'utf8');
    expect(readTable(sql, 'weenie_properties_string')).toEqual([
      { object_Id: 51370, type: 1, value: 'Shard (Level 180+)' },
      { object_Id: 51370, type: 16, value: "It's cold; (very)" },
    ]);
  });
});

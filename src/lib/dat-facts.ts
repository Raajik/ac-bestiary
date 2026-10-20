// Read the game tables the build needs from the retail client data.
//
// The AC Emulator computes a creature's current skill as the attribute
// formula from the retail SkillTable plus the skill the weenie has
// (ACE.Server/WorldObjects/Entity/CreatureSkill.cs). The spell names come
// from the retail SpellTable, so the panel can link each spell.
//
// The DAT reader is reused from asheron-web, which is not edited.

import { DatDatabase } from '../../vendor/asheron-web/packages/dat-parser/src/DatDatabase.js';
import { FileDatBytes } from '../../vendor/asheron-web/packages/dat-parser/src/node/FileDatBytes.js';
import { DatReader } from '../../vendor/asheron-web/packages/dat-parser/src/DatReader.js';
import { SkillTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SkillTable.js';
import { SpellTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/SpellTable.js';

const SKILL_TABLE_ID = 0x0e000004;
const SPELL_TABLE_ID = 0x0e00000e;

export interface SkillFact {
  id: number;
  name: string;
  /** Attribute id the formula starts from. */
  attr1: number;
  /** Attribute id the formula adds, 0 when there is none. */
  attr2: number;
  /** The formula divides the attribute sum by this. */
  divisor: number;
}

export interface SpellFact {
  id: number;
  name: string;
  /** Magic school id. */
  school: number;
}

export interface DatFacts {
  skills: Map<number, SkillFact>;
  spells: Map<number, SpellFact>;
}

/** Open the portal DAT. Only the directory is read, not the whole file. */
export function openPortalDat(path: string): DatDatabase {
  return new DatDatabase(new FileDatBytes(path));
}

/** Read the skill and spell tables from an open DAT. */
export function readDatFacts(db: DatDatabase): DatFacts {
  const skills = new Map<number, SkillFact>();
  const skillData = db.getFileData(SKILL_TABLE_ID);
  if (skillData) {
    const table = new SkillTable(new DatReader(skillData));
    for (const [id, base] of table.skills) {
      skills.set(id, {
        id,
        name: base.name,
        attr1: base.formula.attr1,
        attr2: base.formula.attr2,
        divisor: base.formula.z,
      });
    }
  }

  const spells = new Map<number, SpellFact>();
  const spellData = db.getFileData(SPELL_TABLE_ID);
  if (spellData) {
    const table = new SpellTable(new DatReader(spellData));
    for (const [id, base] of table.spells) {
      spells.set(id, { id, name: base.name, school: base.school });
    }
  }

  return { skills, spells };
}

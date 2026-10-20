// The shape of dist/data.json.
//
// The build writes the file, the page reads it. The types live here, so the
// page does not pull in the build code.

export interface Variant {
  classId: number;
  name: string;
  level: number;
  health: number;
  stamina: number;
  mana: number;
  xp: number;
  setup: number;
  palette: number;
  clothing: number;
  paletteTemplate: number;
  shade: number;
  attributes: Record<string, number>;
  skills: Record<string, number>;
  /** The name of the attack skill, for example "Light Weapons". */
  skillNames: Record<string, string>;
  armorLevel: number;
  resistances: Record<string, number>;
  spells: { id: number; name: string; school: string; probability: number; acpedia: string }[];
  trophies: { classId: number; name: string; chance: number; icon: number | null; acpedia: string }[];
}

export interface Creature {
  name: string;
  acpedia: string;
  subclassed: boolean;
  acpediaLevel: number | null;
  acpediaXp: number | null;
  acpediaHealth: number | null;
  acpediaLoot: number | null;
  acpediaDefense: { melee: number | null; missile: number | null; magic: number | null };
  defaultVariant: number;
  variants: Variant[];
}

export interface BestiaryData {
  generatedAt: string;
  sources: Record<string, string>;
  creatures: Creature[];
  /** ACPedia names that have no retail weenie. */
  missing: string[];
}

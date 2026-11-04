// The appraisal panel of an open tile.

import { MAGIC_FACTOR, MELEE_FACTOR, skillTargets } from '../lib/hit-chance.js';
import type { Creature, Variant } from '../lib/types.js';

const ATTRIBUTE_LABELS: [key: string, string][] = [
  ['strength', 'Strength'],
  ['endurance', 'Endurance'],
  ['coordination', 'Coordination'],
  ['quickness', 'Quickness'],
  ['focus', 'Focus'],
  ['self', 'Self'],
];

/** A variant's name: its number, and how it looks next to the first one (same model, recoloured, another model). */
function variantName(index: number, candidate: Variant, first: Variant): HTMLElement {
  const name = element('span', 'variant-name', `Variant ${index + 1}`);
  if (index > 0) {
    const looks =
      candidate.setup !== first.setup
        ? 'another model'
        : candidate.palette !== first.palette || candidate.clothing !== first.clothing || candidate.shade !== first.shade
          ? 'recoloured'
          : 'same look';
    name.append(element('small', undefined, ` ${looks}`));
  }
  return name;
}

export const RESISTANCE_LABELS: [string, string][] = [
  ['slash', 'Slash'],
  ['pierce', 'Pierce'],
  ['bludgeon', 'Bludgeon'],
  ['fire', 'Fire'],
  ['cold', 'Cold'],
  ['acid', 'Acid'],
  ['electric', 'Electric'],
  ['nether', 'Nether'],
];

/** The magic skills of a creature, in the order the panel shows them. */
const MAGIC_SKILLS: [string, string, string][] = [
  ['warMagic', 'War Magic', 'War Magic'],
  ['voidMagic', 'Void Magic', 'Void Magic'],
  ['lifeMagic', 'Life Magic', 'Life Magic'],
  ['creatureMagic', 'Creature Magic', 'Creature Magic'],
];

function element<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function addRow(list: HTMLElement, term: string, value: string | Node): void {
  const dt = element('dt', undefined, term);
  const dd = element('dd');
  if (typeof value === 'string') dd.textContent = value;
  else dd.append(value);
  list.append(dt, dd);
}

/** A skill row with the values the other side needs. */
function skillRow(
  name: string,
  skillName: string | undefined,
  value: number,
  targets: { label: string; value: number }[],
  spells: { name: string; acpedia: string }[],
): HTMLElement {
  const node = element('div', 'skill');

  const head = element('div', 'skill-head');
  const label = element('span', 'skill-name', name);
  if (skillName) {
    const small = element('small', undefined, ` (${skillName})`);
    label.append(small);
  }
  head.append(label, element('span', 'skill-value', String(value)));
  node.append(head);

  if (targets.length > 0) {
    const targetLine = element('div', 'skill-targets');
    for (const target of targets) {
      const span = element('span', undefined, `${target.label}: ${target.value}`);
      targetLine.append(span);
    }
    node.append(targetLine);
  }

  if (spells.length > 0) {
    const list = element('ul', 'spells');
    for (const spell of spells) {
      const item = element('li');
      const link = document.createElement('a');
      link.href = `https://acpedia.org/wiki/${spell.name.replace(/ /g, '_')}`;
      link.textContent = spell.name;
      link.rel = 'noreferrer';
      item.append(link);
      list.append(item);
    }
    node.append(list);
  }

  return node;
}

/** The panel of a creature. */
export function renderPanel(
  container: HTMLElement,
  creature: Creature,
  variant: Variant,
  onVariant: (variant: Variant) => void,
): void {
  container.textContent = '';
  const panel = element('div', 'appraisal');

  panel.append(element('h2', undefined, creature.name));
  panel.append(
    element(
      'div',
      'level',
      `Level ${variant.level}${creature.subclassed ? ' · subclassed as a Tusker' : ''}`,
    ),
  );

  // The vital bars.
  const bars = element('div', 'bars');
  for (const [kind, label, value] of [
    ['health', 'Health', variant.health],
    ['stamina', 'Stamina', variant.stamina],
    ['mana', 'Mana', variant.mana],
  ] as [string, string, number][]) {
    const bar = element('div', `bar ${kind}`);
    const track = element('div', 'track');
    const fill = element('div', 'fill');
    // The bar shows the pool against this creature's largest one, so the three lengths mean something.
    fill.style.width = `${Math.max(4, Math.round((value / Math.max(variant.health, variant.stamina, variant.mana, 1)) * 100))}%`;
    track.append(fill);
    bar.append(element('span', undefined, label), track, element('b', undefined, String(value)));
    bar.title = `${label}: ${value}. Bars are drawn against this creature's largest pool.`;
    bars.append(bar);
  }
  panel.append(bars);

  // The two tabs.
  const tabs = element('div', 'tabs');
  const bodies = element('div', 'tab-bodies');

  const attributesBody = element('div', 'tab-body');
  const skillsBody = element('div', 'tab-body');
  skillsBody.hidden = true;

  const attributeRows = element('dl', 'rows');
  for (const [key, label] of ATTRIBUTE_LABELS) {
    const value = variant.attributes[key];
    if (value === undefined) continue;
    addRow(attributeRows, label, String(value));
  }
  attributesBody.append(attributeRows);

  // The skills: the attack group, then the defense group.
  const skills = variant.skills;
  const skillNames = variant.skillNames;

  const attackGroup = element('div', 'skill-group');
  attackGroup.append(element('h4', undefined, 'Attack'));

  if (skills.meleeAttack !== undefined) {
    const { even, high } = skillTargets(skills.meleeAttack, MELEE_FACTOR);
    const targets = [{ label: 'Evade 50%', value: even }, { label: 'Evade 90%', value: high }];
    attackGroup.append(
      skillRow('Melee', skillNames.meleeAttack, skills.meleeAttack, targets, []),
    );
  }

  if (skills.missileAttack !== undefined) {
    const { even, high } = skillTargets(skills.missileAttack, MELEE_FACTOR);
    const targets = [{ label: 'Evade 50%', value: even }, { label: 'Evade 90%', value: high }];
    attackGroup.append(
      skillRow('Missile', skillNames.missileAttack, skills.missileAttack, targets, []),
    );
  }

  for (const [key, label, school] of MAGIC_SKILLS) {
    const value = skills[key];
    if (value === undefined) continue;

    const { even, high } = skillTargets(value, MAGIC_FACTOR);
    const targets = [{ label: 'Resist 50%', value: even }, { label: 'Resist 90%', value: high }];

    const spells = variant.spells
      .filter((spell) => spell.school === school)
      .map((spell) => ({ name: spell.name, acpedia: spell.acpedia }));

    attackGroup.append(skillRow(label, undefined, value, targets, spells));
  }

  skillsBody.append(attackGroup);

  const defenseGroup = element('div', 'skill-group');
  defenseGroup.append(element('h4', undefined, 'Defense'));

  if (skills.meleeDefense !== undefined) {
    const { even, high } = skillTargets(skills.meleeDefense, MELEE_FACTOR);
    const targets = [{ label: 'Hit 50%', value: even }, { label: 'Hit 90%', value: high }];
    defenseGroup.append(skillRow('Melee Defense', undefined, skills.meleeDefense, targets, []));
  }

  if (skills.missileDefense !== undefined) {
    const { even, high } = skillTargets(skills.missileDefense, MELEE_FACTOR);
    const targets = [{ label: 'Hit 50%', value: even }, { label: 'Hit 90%', value: high }];
    defenseGroup.append(skillRow('Missile Defense', undefined, skills.missileDefense, targets, []));
  }

  if (skills.magicDefense !== undefined) {
    const { even, high } = skillTargets(skills.magicDefense, MAGIC_FACTOR);
    const targets = [{ label: 'Land 50%', value: even }, { label: 'Land 90%', value: high }];
    defenseGroup.append(skillRow('Magic Defense', undefined, skills.magicDefense, targets, []));
  }

  skillsBody.append(defenseGroup);

  const tabButtons = [
    { id: 'attributes', label: 'Attributes', body: attributesBody },
    { id: 'skills', label: 'Skills', body: skillsBody },
  ];

  for (const [index, tab] of tabButtons.entries()) {
    const button = element('button', 'tab', tab.label);
    button.type = 'button';
    button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    button.addEventListener('click', () => {
      for (const other of tabButtons) {
        const otherButton = tabs.querySelector<HTMLButtonElement>(`[data-tab="${other.id}"]`);
        otherButton?.setAttribute('aria-selected', other.id === tab.id ? 'true' : 'false');
        other.body.hidden = other.id !== tab.id;
      }
    });
    button.dataset.tab = tab.id;
    tabs.append(button);
  }

  bodies.append(attributesBody, skillsBody);
  panel.append(tabs, bodies);

  // The variants of the creature.
  if (creature.variants.length > 1) {
    const section = element('div', 'section');
    section.append(element('h3', undefined, 'Variants'));
    const list = element('div', 'variants');
    const head = element('div', 'variant-head');
    for (const text of ['Variant', 'Level', 'Health', 'XP', '']) head.append(element('span', undefined, text));
    list.append(head);

    for (const [index, candidate] of creature.variants.entries()) {
      const button = element('button', 'variant');
      button.type = 'button';
      if (candidate.classId === variant.classId) button.setAttribute('aria-current', 'true');
      button.append(
        variantName(index, candidate, creature.variants[0]),
        element('span', 'num', String(candidate.level)),
        element('span', 'num', String(candidate.health)),
        element('span', 'num', candidate.xp.toLocaleString('en')),
        element('span', 'variant-state', candidate.classId === variant.classId ? 'Viewing' : 'View'),
      );
      button.title = `Weenie class ${candidate.classId} of the ACE world database`;
      button.addEventListener('click', () => onVariant(candidate));
      list.append(button);
    }

    section.append(list);
    panel.append(section);
  }

  // The armor and the resistances.
  const armorSection = element('div', 'section');
  armorSection.append(element('h3', undefined, 'Armor'));
  const armorRows = element('dl', 'rows');
  addRow(armorRows, 'Armor level', String(variant.armorLevel));
  armorSection.append(armorRows);

  const resistanceList = element('div', 'resistances');
  for (const [key, label] of RESISTANCE_LABELS) {
    const value = variant.resistances[key];
    if (value === undefined) continue;
    const item = element('div', 'resistance');
    const amount = element('b', undefined, `${Math.round(value * 100)}%`);
    item.append(element('span', undefined, label), amount);
    resistanceList.append(item);
  }
  armorSection.append(resistanceList);
  panel.append(armorSection);

  // The ACPedia section: the data the retail panel does not show, and where ACPedia differs from the game data.
  const wikiSection = element('div', 'section wiki');
  wikiSection.append(element('h3', undefined, 'ACPedia'));
  const wikiRows = element('dl', 'rows');
  /** A row with the game's value and, when ACPedia says something else, ACPedia's beside it. */
  const differences: string[] = [];
  const compare = (label: string, game: number, acpedia: number | null): void => {
    if (acpedia !== null && acpedia !== game) differences.push(`${label} ${acpedia.toLocaleString('en')} (game: ${game.toLocaleString('en')})`);
  };
  // The numbers are above already: this section says only where ACPedia disagrees with the game data.
  if (creature.acpediaLevel !== null && creature.acpediaLevel !== variant.level) compare('Level', variant.level, creature.acpediaLevel);
  if (creature.acpediaHealth !== null && creature.acpediaHealth !== variant.health) compare('Health', variant.health, creature.acpediaHealth);
  if (creature.acpediaXp !== null && creature.acpediaXp !== variant.xp) compare('XP award', variant.xp, creature.acpediaXp);
  const wikiLinkRow = element('dl', 'rows');
  const wikiLink = document.createElement('a');
  wikiLink.href = creature.acpedia;
  wikiLink.rel = 'noreferrer';
  wikiLink.textContent = creature.name;
  addRow(wikiLinkRow, 'ACPedia page', wikiLink);
  if (differences.length > 0) {
    wikiSection.append(element('p', 'sources-differ', `ACPedia lists different numbers: ${differences.join(', ')}. The game data is shown here.`));
  }
  wikiSection.append(wikiLinkRow);
  panel.append(wikiSection);

  // The trophies.
  const trophySection = element('div', 'section');
  trophySection.append(element('h3', undefined, 'Trophies'));

  if (variant.trophies.length === 0) {
    trophySection.append(element('p', 'empty', 'This variant drops no trophy.'));
  } else {
    const list = element('div', 'trophies');
    for (const trophy of variant.trophies) {
      const item = element('div', 'trophy');

      const image = document.createElement('img');
      image.src = `icons/${trophy.classId}.png`;
      // The name sits beside the picture, so the picture needs no alt text (a broken one would show it).
      image.alt = '';
      if (trophy.icon) image.dataset.icon = String(trophy.icon);
      image.addEventListener('error', () => image.classList.add('missing'));
      image.loading = 'lazy';
      item.append(image);

      const name = document.createElement('a');
      name.href = trophy.acpedia;
      name.rel = 'noreferrer';
      name.textContent = trophy.name;
      name.className = 'trophy-name';
      item.append(name);

      const chance = element('span', 'trophy-chance', `${(trophy.chance * 100).toFixed(1)}%`);
      item.append(chance);

      list.append(item);
    }
    trophySection.append(list);
  }

  panel.append(trophySection);
  container.append(panel);
}

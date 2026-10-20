// The grid of tiles and the filter bar.

import type { Creature, Variant } from '../lib/types.js';

export type SortKey = 'level' | 'name' | 'health';

export interface GridState {
  search: string;
  minLevel: number | null;
  maxLevel: number | null;
  trophyOnly: boolean;
  sort: SortKey;
}

/** The variant a tile shows: the default one. */
export function defaultVariant(creature: Creature): Variant {
  const found = creature.variants.find((v) => v.classId === creature.defaultVariant);
  return found ?? creature.variants[0];
}

/**
 * The creatures the filter bar keeps.
 *
 * The level range and the trophy filter look at every variant of a creature.
 */
export function visibleCreatures(creatures: Creature[], state: GridState): Creature[] {
  const search = state.search.trim().toLowerCase();

  const kept = creatures.filter((creature) => {
    if (search && !creature.name.toLowerCase().includes(search)) return false;

    if (state.minLevel !== null || state.maxLevel !== null) {
      const inRange = creature.variants.some((variant) => {
        if (state.minLevel !== null && variant.level < state.minLevel) return false;
        if (state.maxLevel !== null && variant.level > state.maxLevel) return false;
        return true;
      });
      if (!inRange) return false;
    }

    if (state.trophyOnly) {
      const drops = creature.variants.some((variant) => variant.trophies.length > 0);
      if (!drops) return false;
    }

    return true;
  });

  kept.sort((a, b) => {
    const first = defaultVariant(a);
    const second = defaultVariant(b);

    if (state.sort === 'name') return a.name.localeCompare(b.name);
    if (state.sort === 'health') return second.health - first.health || a.name.localeCompare(b.name);
    return first.level - second.level || a.name.localeCompare(b.name);
  });

  return kept;
}

/** Read the filter bar into the state. */
export function readFilters(form: HTMLFormElement): GridState {
  const value = (id: string): string => (form.querySelector<HTMLInputElement>(`#${id}`)?.value ?? '').trim();
  const number = (id: string): number | null => {
    const text = value(id);
    if (text === '') return null;
    const parsed = Number(text);
    return Number.isFinite(parsed) ? parsed : null;
  };

  return {
    search: value('search'),
    minLevel: number('level-min'),
    maxLevel: number('level-max'),
    trophyOnly: form.querySelector<HTMLInputElement>('#trophy-only')?.checked ?? false,
    sort: (form.querySelector<HTMLSelectElement>('#sort')?.value ?? 'level') as SortKey,
  };
}

/** Draw the tiles of the creatures. */
export function renderGrid(
  grid: HTMLElement,
  creatures: Creature[],
  onOpen: (creature: Creature) => void,
): void {
  grid.textContent = '';

  for (const creature of creatures) {
    const variant = defaultVariant(creature);

    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'tile';

    const image = document.createElement('img');
    image.src = `stills/${variant.classId}.png`;
    image.alt = creature.name;
    image.loading = 'lazy';
    tile.append(image);

    const name = document.createElement('div');
    name.className = 'tile-name';
    name.textContent = creature.name;
    if (creature.subclassed) {
      const badge = document.createElement('span');
      badge.className = 'tile-badge';
      badge.textContent = 'SUBCLASSED';
      name.append(badge);
    }
    tile.append(name);

    const level = document.createElement('div');
    level.className = 'tile-level';
    level.textContent = `Level ${variant.level}`;
    tile.append(level);

    tile.addEventListener('click', () => onOpen(creature));
    grid.append(tile);
  }
}

// The motions of a creature, from its motion table.
//
// The motion table holds the cycles (the substates, like the ready stance,
// the walk and the run), the links (the transitions, like the attack and the
// fall) and the modifiers. A button appears only for a motion the table has.

import { MotionCommand } from '../../vendor/asheron-web/packages/renderer/src/animation/MotionCommands.js';
import type { MotionTable } from '../../vendor/asheron-web/packages/dat-parser/src/file-types/MotionTable.js';

export type MotionName = 'idle' | 'walk' | 'run' | 'attack' | 'death';

export interface MotionButton {
  name: MotionName;
  label: string;
}

/** The command of a walk, of a run and of a death. */
const WALK = MotionCommand.WalkForward;
const RUN = MotionCommand.RunForward;
const DEAD = MotionCommand.Dead;

/** The wire index of a command, the key the motion table uses. */
function wire(command: number): number {
  return command & 0xffff;
}

/** Every attack command of the client, the first families first. */
const ATTACK_COMMANDS = Object.entries(MotionCommand)
  .filter(([name]) => name.startsWith('Attack'))
  .map(([, command]) => command)
  .sort((a, b) => a - b);

/** The style of a link key: the table keys the links by style and substate. */
function styleOfLink(outerKey: number): number {
  return 0x80000000 | (outerKey >>> 16);
}

/** Does the table have a cycle for this command? */
function hasCycle(table: MotionTable, command: number): boolean {
  const index = wire(command);
  for (const key of table.cycles.keys()) {
    if ((key & 0xffff) === index) return true;
  }
  return false;
}

/** The style that links to this command, if any. */
function linkStyle(table: MotionTable, command: number): number | null {
  const index = wire(command);
  for (const [outerKey, links] of table.links) {
    for (const key of links.keys()) {
      if ((key & 0xffff) === index) return styleOfLink(outerKey);
    }
  }
  return null;
}

/** The attack command the table has, with the style that links to it. */
export function attackMotion(table: MotionTable): { command: number; style: number } | null {
  for (const command of ATTACK_COMMANDS) {
    const style = linkStyle(table, command);
    if (style !== null) return { command, style };
    if (hasCycle(table, command)) return { command, style: table.defaultStyle };
  }
  return null;
}

/**
 * The buttons the motion table gives.
 *
 * A walk and a run are cycles of the table. The attack and the death are
 * links from the ready stance.
 */
export function motionButtons(table: MotionTable | null): MotionButton[] {
  if (!table) return [];

  const buttons: MotionButton[] = [{ name: 'idle', label: 'Idle' }];

  if (hasCycle(table, WALK) || linkStyle(table, WALK) !== null) {
    buttons.push({ name: 'walk', label: 'Walk' });
  }
  if (hasCycle(table, RUN) || linkStyle(table, RUN) !== null) {
    buttons.push({ name: 'run', label: 'Run' });
  }
  if (attackMotion(table)) {
    buttons.push({ name: 'attack', label: 'Attack' });
  }
  if (hasCycle(table, DEAD) || linkStyle(table, DEAD) !== null) {
    buttons.push({ name: 'death', label: 'Death' });
  }

  return buttons;
}

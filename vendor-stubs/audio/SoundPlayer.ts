// Types only: PhysicsScriptPlayer imports these two names as types, and the wiki app does not vendor the files that
// hold them (tsconfig.json "rootDirs" finds this folder beside the vendored renderer).
export interface SoundPlayer {
  effectsVolume?: number;
  playPositionalSound(...args: unknown[]): Promise<unknown>;
}

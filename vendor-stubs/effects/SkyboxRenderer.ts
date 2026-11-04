// Types only, like ../audio/SoundPlayer.ts.
import type * as THREE from 'three';

export interface SkyObjectFrame {
  local: THREE.Vector3;
  cell: THREE.Vector3;
}

// The calls to the app's Rust side (src-tauri/src/lib.rs).

import { convertFileSrc, invoke } from '@tauri-apps/api/core';

import type { QueryFn, Row } from './pages.js';

/** One read-only SQL statement on the snapshot. */
export const query: QueryFn = (sql, params = []) => invoke<Row[]>('snapshot_query', { sql, params });

/** The AC install folder saved on first run, or null. */
export const installFolder = (): Promise<string | null> => invoke<string | null>('install_folder');

/** Check the folder holds client_portal.dat and remember it; rejects with the reason when it does not. */
export const setInstallFolder = (folder: string): Promise<string> => invoke<string>('set_install_folder', { folder });

/** The system's folder dialog, for the install folder; null when it is closed without a choice. */
export const pickInstallFolder = (start?: string): Promise<string | null> =>
  invoke<string | null>('pick_install_folder', { start: start || null });

/** A byte range of client_portal.dat. */
export async function readDatRange(offset: number, length: number): Promise<Uint8Array> {
  return new Uint8Array(await invoke<ArrayBuffer>('read_dat_range', { offset, length }));
}

/** The URL of a file in the snapshot's images folder. */
export const snapshotImageUrl = (file: string): string => convertFileSrc(file, 'snap');

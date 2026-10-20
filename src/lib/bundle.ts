// The model bundle: the retail client files a creature model needs.
//
// The page must not read the 900 MB client data. The build collects the
// files of every model into one bundle file, and the page reads the bundle
// instead. The bundle holds the same file ids as the client data, so the
// model code of asheron-web reads it unchanged.
//
// Layout: the file count, then for each file the id and the length, then the
// bytes of the files in the same order.

/** Pack the files into the bundle format. */
export function packBundle(files: Map<number, Uint8Array>): Uint8Array {
  let size = 4;
  for (const data of files.values()) size += 8 + data.byteLength;

  const out = new Uint8Array(size);
  const view = new DataView(out.buffer);
  view.setUint32(0, files.size, true);

  let offset = 4;
  for (const [id, data] of files) {
    view.setUint32(offset, id, true);
    view.setUint32(offset + 4, data.byteLength, true);
    offset += 8;
    out.set(data, offset);
    offset += data.byteLength;
  }

  return out;
}

/** Unpack the bundle format into the file map. */
export function unpackBundle(buffer: ArrayBuffer): Map<number, Uint8Array> {
  const view = new DataView(buffer);
  const count = view.getUint32(0, true);
  const files = new Map<number, Uint8Array>();

  let offset = 4;
  for (let i = 0; i < count; i++) {
    const id = view.getUint32(offset, true);
    const length = view.getUint32(offset + 4, true);
    offset += 8;
    files.set(id, new Uint8Array(buffer, offset, length));
    offset += length;
  }

  return files;
}

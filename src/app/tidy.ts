// Tidy a page's sanitized HTML for the app's layout. The wiki builds its infoboxes from nested layout tables, which
// leave empty spacer cells, headings with nothing under them, and a stats box that repeats the app's own panel.
// This works on the DOM after the sanitizer, so the snapshot stays as the wiki made it.

export interface TidyOptions {
  /** True when the app shows its own item or creature panel beside the text: the wiki's infobox then folds away. */
  hasPanel?: boolean;
}

const isBlank = (cell: Element): boolean =>
  (cell.textContent ?? '').replace(/[\s\u00a0]+/g, '') === '' && cell.querySelector('img, a, hr, table') === null;

/** Layout tables, not data tables: a `wikitable` keeps every cell, even an empty one, so its columns stay aligned. */
const isLayoutTable = (table: Element): boolean => !table.classList.contains('wikitable');

function dropEmptyCells(root: Element): void {
  for (const table of Array.from(root.querySelectorAll('table')).filter(isLayoutTable)) {
    for (const row of Array.from(table.querySelectorAll(':scope > tbody > tr, :scope > tr'))) {
      const cells = Array.from(row.children).filter((cell) => cell.matches('td, th'));
      // A spacer is an empty cell with a width; trailing empty cells are layout leftovers too.
      let end = cells.length;
      while (end > 0 && isBlank(cells[end - 1])) end--;
      cells.forEach((cell, i) => {
        if (!isBlank(cell)) return;
        if (i >= end || (cell.hasAttribute('width') && !cell.hasAttribute('colspan'))) cell.remove();
      });
      if (row.children.length === 0) row.remove();
    }
  }
}

const level = (node: Element): number => (/^H[1-6]$/.test(node.tagName) ? Number(node.tagName[1]) : 0);

/** Remove a heading with nothing under it (the next heading is as high, or the page ends). */
function dropEmptySections(root: Element): void {
  for (const heading of Array.from(root.querySelectorAll('h2, h3, h4'))) {
    if (heading.id === 'mw-toc-heading') continue;
    let next = heading.nextElementSibling;
    // Empty paragraphs and breaks count as nothing.
    while (next && !level(next) && next.matches('p, br, div') && isBlank(next)) next = next.nextElementSibling;
    if (next === null || (level(next) > 0 && level(next) <= level(heading))) heading.remove();
  }
}

const text = (node: Element): string => (node.textContent ?? '').replace(/[\s\u00a0]+/g, ' ').trim();

/** The "Introduced / Related Quests / Updated" strip: its table becomes a row of label and value pairs. */
function metaStrip(root: Element): Element | null {
  const table = Array.from(root.children).find((child) => child.tagName === 'TABLE' && /^(Introduced|Related Quests|Updated):/.test(text(child)));
  if (!table) return null;
  const rows = Array.from(table.querySelectorAll('tr'));
  const cells = (row: Element) => Array.from(row.children).filter((c) => c.matches('td, th'));
  const row = rows.reduce((best, r) => (cells(r).length > cells(best).length ? r : best), rows[0]);
  const list = root.ownerDocument.createElement('dl');
  list.className = 'meta-strip';
  const all = cells(row).filter((cell) => !isBlank(cell));
  for (let i = 0; i < all.length; i++) {
    const label = text(all[i]);
    if (!label.endsWith(':') || !all[i + 1]) continue;
    const group = root.ownerDocument.createElement('div');
    const dt = root.ownerDocument.createElement('dt');
    dt.textContent = label.slice(0, -1);
    const dd = root.ownerDocument.createElement('dd');
    dd.append(...Array.from(all[i + 1].childNodes));
    group.append(dt, dd);
    list.append(group);
    i++;
  }
  if (list.children.length === 0) return null;
  table.replaceWith(list);
  return list;
}

/**
 * On a page with the app's own panel beside it, the wiki's infobox repeats the panel. The screenshots move up
 * under the title strip, and the infobox goes to a closed `details` at the end of the article.
 */
function moveInfobox(root: Element, after: Element | null): void {
  const strength = Array.from(root.querySelectorAll('th')).find((th) => text(th) === 'Strength');
  const layout = Array.from(root.children).find(
    (child) => child.tagName === 'TABLE' && (child.querySelector('table[width="300"]') || child.contains(strength ?? null)),
  );
  if (!layout) return;
  const infobox = layout.querySelector('table[width="300"]') ?? strength?.closest('table') ?? null;
  if (!infobox) return;

  const doc = root.ownerDocument;
  const shots = doc.createElement('div');
  shots.className = 'wiki-shots';
  for (const node of Array.from(layout.querySelectorAll('figure, img'))) {
    if (infobox.contains(node)) continue;
    if (node.tagName === 'IMG' && node.closest('figure')) continue;
    if (node.tagName === 'IMG' && Number(node.getAttribute('width') ?? 0) < 100) continue;
    shots.append(node);
  }
  if (shots.children.length > 0) {
    if (after) after.after(shots);
    else root.prepend(shots);
  }

  const details = doc.createElement('details');
  details.className = 'wiki-infobox';
  const summary = doc.createElement('summary');
  summary.textContent = "The wiki's own version of these stats";
  // The rest of the layout table (a creature's trophies and attack table) repeats the panel too.
  details.append(summary, layout);
  root.append(details);
}

/** Remove a table that holds no text and no picture, deepest first. */
function dropEmptyTables(root: Element): void {
  for (const table of Array.from(root.querySelectorAll('table')).reverse()) {
    if (text(table) === '' && table.querySelector('img') === null) table.remove();
  }
}

/** Two pictures the wiki lays one over the other (a map and its markers) are put in one stacked box. */
function stackLayers(root: Element): void {
  for (const quote of Array.from(root.querySelectorAll('blockquote'))) {
    const layers = Array.from(quote.children).filter(
      (child) => child.tagName === 'DIV' && text(child) === '' && child.querySelectorAll('img').length === 1,
    );
    if (layers.length < 2) continue;
    const stack = root.ownerDocument.createElement('div');
    stack.className = 'layers';
    layers[0].before(stack);
    for (const layer of layers) stack.append(...Array.from(layer.querySelectorAll('img')));
    layers.forEach((layer) => layer.remove());
  }
}

export function tidyWikiDom(top: Element, options: TidyOptions = {}): void {
  // MediaWiki wraps the whole page in one div; the page's own blocks are its children.
  const only = top.children.length === 1 ? top.firstElementChild : null;
  const root = only?.tagName === 'DIV' ? only : top;
  const strip = metaStrip(root);
  if (options.hasPanel) moveInfobox(root, strip);
  stackLayers(root);
  dropEmptyCells(root);
  dropEmptyTables(root);
  dropEmptySections(root);
}

// Make a page's rendered HTML from the wiki safe to show (spec wiki-app.md, "The snapshot"): the HTML is untrusted
// input. Only an allowlist of tags and attributes stays. Scripts, styles and embeds go with their content, event
// handlers and outside URLs go, wiki links become app links, and wiki images become the snapshot's images.

export interface SanitizeOptions {
  /** The URL of a snapshot image by the wiki's file name ("Bow_of_the_Quiddity_Icon.png"), or null when it has none. */
  imageUrl(name: string): string | null;
}

/** Tags that go with everything inside them. */
const DROP = new Set([
  'SCRIPT', 'STYLE', 'IFRAME', 'FRAME', 'FRAMESET', 'OBJECT', 'EMBED', 'APPLET', 'LINK', 'META', 'BASE', 'FORM',
  'INPUT', 'BUTTON', 'TEXTAREA', 'SELECT', 'OPTION', 'SVG', 'MATH', 'NOSCRIPT', 'TEMPLATE', 'AUDIO', 'VIDEO',
  'SOURCE', 'TRACK', 'CANVAS', 'DIALOG', 'TITLE', 'HEAD',
]);

/** Tags that stay. Any other tag is replaced by its content. */
const KEEP = new Set([
  'A', 'P', 'DIV', 'SPAN', 'BR', 'HR', 'B', 'STRONG', 'I', 'EM', 'U', 'S', 'SMALL', 'BIG', 'SUB', 'SUP', 'CODE',
  'PRE', 'BLOCKQUOTE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'UL', 'OL', 'LI', 'DL', 'DT', 'DD', 'TABLE', 'CAPTION',
  'THEAD', 'TBODY', 'TFOOT', 'TR', 'TD', 'TH', 'COLGROUP', 'COL', 'IMG', 'FIGURE', 'FIGCAPTION', 'ABBR', 'CITE',
  'MARK', 'Q', 'TT', 'KBD', 'VAR', 'DFN',
]);

/** Attributes that stay on any kept tag; `href` and `src` are rewritten apart. */
const ATTRIBUTES = new Set(['colspan', 'rowspan', 'align', 'valign', 'width', 'height', 'alt', 'title', 'scope']);

/** Classes that stay, for the app's own styles. */
const CLASSES = new Set(['wikitable', 'mw-headline', 'thumb', 'thumbinner', 'thumbcaption']);

/** Namespaces whose pages the app does not have: a link to one keeps its text only. */
const OTHER_NAMESPACES = /^(File|Image|Media|Category|Special|Template|Help|User|Talk|MediaWiki|Module|Project|ACCPP Wiki)( talk)?:/i;

/** The wiki's own addresses: the lohk host, or a path under /wiki/. */
const WIKI_PREFIX = /^(?:https?:\/\/10\.0\.0\.10:8095)?\/wiki\//;

/** The app link of a page. */
export function pageHref(title: string): string {
  return `#/page/${encodeURIComponent(title)}`;
}

/** The page a wiki link opens, or null when it is no article of the wiki (outside, red link, other namespace). */
export function wikiLinkTitle(href: string): string | null {
  if (!WIKI_PREFIX.test(href)) return null;
  let rest = href.replace(WIKI_PREFIX, '');
  if (rest.startsWith('index.php')) {
    const query = new URLSearchParams(rest.slice(rest.indexOf('?') + 1));
    if (query.has('redlink') || query.has('action')) return null;
    rest = query.get('title') ?? '';
  } else {
    rest = rest.split(/[?#]/)[0];
  }
  let title: string;
  try {
    title = decodeURIComponent(rest).replace(/_/g, ' ').trim();
  } catch {
    return null;
  }
  if (title === '' || OTHER_NAMESPACES.test(title)) return null;
  return title;
}

/** The file name of a wiki image address: `/wiki/images/8/8f/A.png` and its thumbnails give "A.png". */
export function wikiImageName(src: string): string | null {
  const match = src.match(/^(?:https?:\/\/10\.0\.0\.10:8095)?\/wiki\/images\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/?#]+)/);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return null;
  }
}

function unwrap(node: Element): void {
  node.replaceWith(...Array.from(node.childNodes));
}

function clean(node: Element, options: SanitizeOptions): void {
  for (const child of Array.from(node.children)) {
    const tag = child.tagName.toUpperCase();
    if (DROP.has(tag)) {
      child.remove();
      continue;
    }
    // The children first, so an unwrapped tag hands up children that are clean already.
    clean(child, options);
    if (!KEEP.has(tag)) {
      unwrap(child);
      continue;
    }

    const href = child.getAttribute('href');
    const src = child.getAttribute('src');
    const classes = (child.getAttribute('class') ?? '').split(/\s+/).filter((c) => CLASSES.has(c));
    for (const attribute of Array.from(child.attributes)) {
      if (!ATTRIBUTES.has(attribute.name.toLowerCase())) child.removeAttribute(attribute.name);
    }
    if (classes.length > 0) child.setAttribute('class', classes.join(' '));

    if (tag === 'A') {
      const title = href ? wikiLinkTitle(href) : null;
      if (title === null) {
        unwrap(child);
        continue;
      }
      child.setAttribute('href', pageHref(title));
    } else if (tag === 'IMG') {
      const name = src ? wikiImageName(src) : null;
      const url = name ? options.imageUrl(name) : null;
      if (url === null) {
        child.remove();
        continue;
      }
      child.setAttribute('src', url);
    }
  }
}

/** The safe HTML of a page. `parser` is the window's DOMParser (or a test DOM's). */
export function sanitizeWikiHtml(html: string, parser: DOMParser, options: SanitizeOptions): string {
  const doc = parser.parseFromString(`<!doctype html><body>${html}`, 'text/html');
  clean(doc.body, options);
  return doc.body.innerHTML;
}

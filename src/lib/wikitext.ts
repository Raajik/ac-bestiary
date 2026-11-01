// Read the parts of a wiki page's wikitext the app needs: the parameters of
// its infobox templates (spec wiki-app.md, "The snapshot"). MediaWiki renders
// the page itself; this does not reimplement wikitext.

/** The infobox templates the app knows, and what kind of page each one makes. */
export const INFOBOX_KINDS: Record<string, 'item' | 'creature' | 'npc'> = {
  'Melee Weapon': 'item',
  'Missile Weapon': 'item',
  'Magic Caster': 'item',
  Armor: 'item',
  Item: 'item',
  Creature: 'creature',
  NPC: 'npc',
};

export interface Infobox {
  template: string;
  /** Named parameters by name; positional ones as "1", "2", ... Values are raw wikitext, trimmed. */
  params: Record<string, string>;
}

/** Split on a separator that is not inside `[[...]]` or `{{...}}`. */
function splitOutside(text: string, separator: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let current = '';

  for (let i = 0; i < text.length; i++) {
    const pair = text.slice(i, i + 2);
    if (pair === '[[' || pair === '{{') {
      depth++;
      current += pair;
      i++;
      continue;
    }
    if ((pair === ']]' || pair === '}}') && depth > 0) {
      depth--;
      current += pair;
      i++;
      continue;
    }
    if (depth === 0 && text.startsWith(separator, i)) {
      parts.push(current);
      current = '';
      i += separator.length - 1;
      continue;
    }
    current += text[i];
  }

  parts.push(current);
  return parts;
}

/** The name of a template as MediaWiki matches it: first letter upper case, `_` as space, spaces squeezed. */
function templateName(raw: string): string {
  const name = raw.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/** The top level `{{...}}` templates of the wikitext, as their inner text. */
function topTemplates(wikitext: string): string[] {
  const found: string[] = [];
  let depth = 0;
  let start = 0;

  for (let i = 0; i < wikitext.length - 1; i++) {
    const pair = wikitext.slice(i, i + 2);
    if (pair === '{{') {
      if (depth === 0) start = i + 2;
      depth++;
      i++;
    } else if (pair === '}}' && depth > 0) {
      depth--;
      if (depth === 0) found.push(wikitext.slice(start, i));
      i++;
    }
  }

  return found;
}

/** The parameters of each known infobox template on the page, in page order. */
export function readInfoboxes(wikitext: string): Infobox[] {
  const boxes: Infobox[] = [];

  for (const inner of topTemplates(wikitext)) {
    const [rawName, ...parts] = splitOutside(inner, '|');
    const template = templateName(rawName);
    if (!(template in INFOBOX_KINDS)) continue;

    const params: Record<string, string> = {};
    let position = 0;
    for (const part of parts) {
      const eq = splitOutside(part, '=');
      if (eq.length > 1) {
        const name = eq[0].replace(/\s+/g, ' ').trim();
        if (name !== '') params[name] = eq.slice(1).join('=').trim();
      } else {
        position++;
        params[String(position)] = part.trim();
      }
    }
    boxes.push({ template, params });
  }

  return boxes;
}

import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Window } from 'happy-dom';
import { describe, expect, it } from 'vitest';

import { sanitizeWikiHtml, wikiImageName, wikiLinkTitle } from '../src/app/sanitize.js';
import { WIKI_FIXTURE } from './fake-wiki-api.js';

const parser = new new Window().DOMParser();
const options = { imageUrl: (name: string) => (name === 'Bow_of_the_Quiddity_Icon.png' ? `snap://localhost/${name}` : null) };
const clean = (html: string) => sanitizeWikiHtml(html, parser as unknown as DOMParser, options);

describe('sanitizeWikiHtml', () => {
  it('removes scripts, styles and embeds with their content', () => {
    const out = clean('<p>a<script>alert(1)</script><style>p{}</style><iframe src="x"></iframe><object>o</object>b</p>');
    expect(out).toBe('<p>ab</p>');
  });

  it('removes event handlers, inline styles and other attributes', () => {
    const out = clean('<table><tr><td onclick="alert(1)" onmouseover="x()" style="background:url(http://evil/x.png)" colspan="2" id="x">c</td></tr></table>');
    expect(out).toBe('<table><tbody><tr><td colspan="2">c</td></tr></tbody></table>');
  });

  it('keeps the text of an outside link, a red link and a file link, but not the link', () => {
    expect(clean('<a href="https://acpedia.org/wiki/Tusker">out</a>')).toBe('out');
    expect(clean('<a href="javascript:alert(1)">js</a>')).toBe('js');
    expect(clean('<a href="/wiki/index.php?title=Nope&amp;action=edit&amp;redlink=1" class="new">red</a>')).toBe('red');
    expect(clean('<a href="/wiki/Category:Bow">cat</a>')).toBe('cat');
  });

  it('rewrites wiki links to app links', () => {
    expect(clean('<a href="/wiki/Aura_of_Defender_IV" title="Aura of Defender IV">A</a>')).toBe(
      '<a title="Aura of Defender IV" href="#/page/Aura%20of%20Defender%20IV">A</a>',
    );
    expect(clean('<a href="http://10.0.0.10:8095/wiki/Resistance_Cleaving:_Piercing#Notes">R</a>')).toBe(
      '<a href="#/page/Resistance%20Cleaving%3A%20Piercing">R</a>',
    );
  });

  it('serves wiki images from the snapshot, and drops images it does not have', () => {
    expect(clean('<img src="/wiki/images/8/8f/Bow_of_the_Quiddity_Icon.png" width="32" srcset="x 2x" onerror="x()">')).toBe(
      '<img width="32" src="snap://localhost/Bow_of_the_Quiddity_Icon.png">',
    );
    expect(clean('<img src="/wiki/images/1/1a/Missing.png">')).toBe('');
    expect(clean('<img src="http://evil.example/x.png">')).toBe('');
  });

  it('cleans a real page from the lohk wiki: no scripts, handlers or outside URLs left', () => {
    const html = JSON.parse(readFileSync(join(WIKI_FIXTURE, '02-parse.json'), 'utf8')).parse.text as string;
    const out = clean(html);
    expect(out).toContain('A weapon made of a strange pulsating energy.');
    expect(out).toContain('href="#/page/Aura%20of%20Defender%20IV"');
    expect(out).toContain('src="snap://localhost/Bow_of_the_Quiddity_Icon.png"');
    expect(out).not.toMatch(/<script|<style|\son\w+=|style=|href="(?!#\/page\/)|src="(?!snap:)/i);
  });
});

describe('wikiLinkTitle and wikiImageName', () => {
  it('reads the page of a wiki link', () => {
    expect(wikiLinkTitle('/wiki/Bow_of_the_Quiddity')).toBe('Bow of the Quiddity');
    expect(wikiLinkTitle('/wiki/index.php?title=Tusker_Guard')).toBe('Tusker Guard');
    expect(wikiLinkTitle('/wiki/File:Bow_of_the_Quiddity_Icon.png')).toBeNull();
    expect(wikiLinkTitle('//evil.example/wiki/X')).toBeNull();
  });

  it('reads the file name of an image and of its thumbnail', () => {
    expect(wikiImageName('/wiki/images/thumb/a/ab/Tusker_Live.jpg/300px-Tusker_Live.jpg')).toBe('Tusker_Live.jpg');
    expect(wikiImageName('/wiki/images/8/8f/Bow_of_the_Quiddity_Icon.png')).toBe('Bow_of_the_Quiddity_Icon.png');
  });
});

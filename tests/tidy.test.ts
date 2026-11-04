import { Window } from 'happy-dom';
import { describe, expect, it } from 'vitest';

import { tidyWikiDom } from '../src/app/tidy.js';

function tidy(html: string, options = {}): string {
  const document = new Window().document;
  document.body.innerHTML = html;
  tidyWikiDom(document.body as unknown as Element, options);
  return document.body.innerHTML;
}

describe('tidyWikiDom', () => {
  it('drops empty spacer and trailing cells in a layout table', () => {
    const out = tidy('<table><tbody><tr><td width="1"></td><th>Strength</th><td>210</td><td width="1"></td></tr><tr><td>a</td><td>b</td><td></td><td></td></tr></tbody></table>');
    expect(out).toBe('<table><tbody><tr><th>Strength</th><td>210</td></tr><tr><td>a</td><td>b</td></tr></tbody></table>');
  });

  it('keeps every cell of a wikitable, so its columns stay aligned', () => {
    const html = '<table class="wikitable"><tbody><tr><td>a</td><td></td><td>c</td></tr><tr><td>d</td><td>e</td><td></td></tr></tbody></table>';
    expect(tidy(html)).toBe(html);
  });

  it('keeps an empty cell between two filled cells of a layout table', () => {
    const html = '<table><tbody><tr><td>a</td><td></td><td>c</td></tr></tbody></table>';
    expect(tidy(html)).toBe(html);
  });

  it('removes a heading with nothing under it', () => {
    expect(tidy('<p>x</p><h2>Notes</h2>')).toBe('<p>x</p>');
    expect(tidy('<h2>Empty</h2><h2>Full</h2><p>text</p>')).toBe('<h2>Full</h2><p>text</p>');
    expect(tidy('<h2>Parent</h2><h3>Child</h3><p>t</p>')).toBe('<h2>Parent</h2><h3>Child</h3><p>t</p>');
  });

  it('turns the Introduced / Related strip into label and value pairs', () => {
    const html = '<table><tbody><tr><td><table><tbody><tr><td><table><tbody><tr><td><b>Introduced:</b></td><td><a href="#/page/Release">Release</a></td><td width="8"></td><td><b>Updated:</b></td><td><a href="#/page/X">X</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><p>after</p>';
    const out = tidy(html);
    expect(out).toBe('<dl class="meta-strip"><div><dt>Introduced</dt><dd><a href="#/page/Release">Release</a></dd></div><div><dt>Updated</dt><dd><a href="#/page/X">X</a></dd></div></dl><p>after</p>');
  });

  it('moves the infobox of a page with a panel to a closed details at the end, and the screenshot up', () => {
    const html = '<table><tbody><tr><td><table width="300"><tbody><tr><td>Value: 2,000</td></tr></tbody></table></td><td><figure><img width="201" src="x.png"></figure></td></tr></tbody></table><h2>Notes</h2><p>n</p>';
    const out = tidy(html, { hasPanel: true });
    expect(out).toBe('<div class="wiki-shots"><figure><img width="201" src="x.png"></figure></div><h2>Notes</h2><p>n</p><details class="wiki-infobox"><summary>The wiki\'s own version of these stats</summary><table><tbody><tr><td><table width="300"><tbody><tr><td>Value: 2,000</td></tr></tbody></table></td></tr></tbody></table></details>');
    expect(tidy(html)).not.toContain('<details');
  });

  it('finds the page blocks inside the wrapper div that MediaWiki adds', () => {
    const html = '<div><table><tbody><tr><td><table width="300"><tbody><tr><td>Value</td></tr></tbody></table></td></tr></tbody></table><h2>Notes</h2><p>n</p></div>';
    const out = tidy(html, { hasPanel: true });
    expect(out.endsWith('</details></div>')).toBe(true);
    expect(out).toContain('<div><h2>Notes</h2>');
  });

  it('stacks the pictures the wiki lays one over the other', () => {
    const out = tidy('<blockquote><div><span><img src="a.png"></span></div><div><span><img src="b.png"></span></div><div><small>Data</small></div></blockquote>');
    expect(out).toBe('<blockquote><div class="layers"><img src="a.png"><img src="b.png"></div><div><small>Data</small></div></blockquote>');
  });
});

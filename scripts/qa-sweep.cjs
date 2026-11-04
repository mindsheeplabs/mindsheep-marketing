// QA sweep: every route at desktop and phone width. Checks status, sideways
// overflow, content still hidden after a full scroll, broken images, console
// errors and banned phrases. Screenshots go to design-previews/shots/site/.
// Usage: node scripts/qa-sweep.cjs [baseUrl]   (default http://localhost:3100)
const PW = process.env.PLAYWRIGHT_CORE || 'C:/Users/idead/Desktop/mindsheep labs/labs-site/scrollcraft/builds/labs-home/node_modules/playwright-core';
const { chromium } = require(PW);
const BASE = process.argv[2] || 'http://localhost:3100';
const ROUTES = ['/', '/services', '/services/smarter-google-ads', '/services/ai-search-visibility', '/services/ai-design-websites', '/about', '/case-studies', '/contact'];
const BANNED = [/human to human/i, /humans helping humans/i, /\bauthentic\b/i, /AgencyMetrica/, /Shopify/, / — /];
(async () => {
  const b = await chromium.launch({ channel: 'chrome', headless: true });
  let fails = 0;
  for (const route of ROUTES) for (const w of [1280, 390]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text().slice(0, 120)));
    const res = await p.goto(BASE + route, { waitUntil: 'load', timeout: 60000 });
    await p.evaluate(async () => { for (let y = 0; y <= document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } window.scrollTo(0, 0); });
    await p.waitForTimeout(900);
    const r = await p.evaluate((banned) => {
      const hidden = [...document.querySelectorAll('main *')].filter(el => el.children.length === 0 && el.textContent.trim() && getComputedStyle(el).opacity === '0' && !el.closest('.hero__photo') && el.getClientRects().length).length;
      const broken = [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').map(i => i.getAttribute('src'));
      const text = document.body.innerText;
      return { overflow: document.documentElement.scrollWidth > innerWidth + 1, hidden, broken, banned: banned.filter(s => new RegExp(s.src, s.flags).test(text)).map(s => s.src), h1: (document.querySelector('h1') || {}).innerText };
    }, BANNED.map(x => ({ src: x.source, flags: x.flags })));
    const name = (route === '/' ? 'home' : route.slice(1).replace(/\//g, '-')) + '-' + w + '.jpg';
    await p.screenshot({ path: 'design-previews/shots/site/' + name, fullPage: true, type: 'jpeg', quality: 60 });
    const bad = res.status() !== 200 || r.overflow || r.hidden || r.broken.length || r.banned.length || errs.length;
    if (bad) fails++;
    console.log(`${bad ? 'FAIL' : 'OK  '} ${route} @${w} ${res.status()}${r.overflow ? ' overflow' : ''}${r.hidden ? ` hidden=${r.hidden}` : ''}${r.broken.length ? ' broken=' + r.broken.join(',') : ''}${r.banned.length ? ' banned=' + r.banned.join(',') : ''}${errs.length ? ' console=' + errs.join(' | ') : ''}`);
    await p.close();
  }
  await b.close();
  console.log(fails ? `\n${fails} FAILED` : '\nALL CLEAR');
  process.exit(fails ? 1 : 0);
})();

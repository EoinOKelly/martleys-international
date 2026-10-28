import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright-core';

const baseUrl = process.env.SITE_URL || 'http://127.0.0.1:4173';
const routes = ['/', '/samples/blue', '/samples/navy', '/samples/white', '/samples/martley-blue', '/samples/dark-petrol', '/about', '/services', '/sectors', '/fleet', '/careers', '/contact', '/missing-page'];
const sampleColours = { '/samples/blue': 'rgb(10, 112, 159)', '/samples/navy': 'rgb(11, 49, 85)', '/samples/white': 'rgb(255, 255, 255)', '/samples/martley-blue': 'rgb(7, 95, 168)', '/samples/dark-petrol': 'rgb(18, 59, 67)' };
const widths = [320, 375, 390, 430, 768, 900, 1024, 1440];
const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--disable-gpu', '--disable-software-rasterizer', '--no-sandbox'] });
const failures = [];
await mkdir('qa-artifacts', { recursive: true });

try {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 844 }, deviceScaleFactor: 1, isMobile: width <= 900, hasTouch: width <= 900 });
    const page = await context.newPage();
    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
      assert.equal(response?.status(), 200, `${route} should return HTTP 200`);
      await page.locator('h1').first().waitFor();
      await page.evaluate(() => document.fonts.ready);
      if (width === 390 && sampleColours[route]) {
        assert.equal(await page.locator('.site-header').evaluate(element => getComputedStyle(element).backgroundColor), sampleColours[route], `${route} has the selected header colour`);
        assert.equal(await page.locator('.header-sample-card').count(), 6, `${route} includes links to every header sample`);
        if (['/samples/martley-blue', '/samples/dark-petrol'].includes(route)) assert.equal(await page.locator('.topline').evaluate(element => getComputedStyle(element).backgroundColor), sampleColours[route], `${route} keeps the top and main bars the same colour`);
      }
      const layout = await page.evaluate(() => {
        const root = document.documentElement;
        const width = root.clientWidth;
        const offenders = [...document.querySelectorAll('body *')].filter(element => {
          const style = getComputedStyle(element);
          const box = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && box.width > 0 && (box.right > width + 1 || box.left < -1);
        }).slice(0, 8).map(element => ({ tag: element.tagName.toLowerCase(), className: String(element.className).slice(0, 60), text: element.textContent.trim().slice(0, 40), right: Math.round(element.getBoundingClientRect().right) }));
        return { clientWidth: width, scrollWidth: root.scrollWidth, offenders };
      });
      if (layout.scrollWidth > layout.clientWidth + 1) failures.push(`${width}px ${route}: ${JSON.stringify(layout)}`);
      if ([390, 1440].includes(width) && ['/', '/services', '/contact'].includes(route)) await page.screenshot({ path: `qa-artifacts/${route === '/' ? 'home' : route.slice(1)}-${width}.png`, fullPage: false });
    }
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    if (width === 390) {
      await page.locator('.home-offer-grid > a').first().scrollIntoViewIfNeeded();
      await page.waitForFunction(() => getComputedStyle(document.querySelector('.home-offer-grid > a')).opacity === '1');
    }
    if (width <= 900) {
      const menu = page.locator('.menu-button');
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true', `${width}px menu opens`);
      await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: /Contact us/i }).click();
      await page.waitForURL('**/contact');
      await page.locator('h1').first().waitFor();
      assert.equal(await page.locator('h1').count(), 1, `${width}px contact route renders`);
      assert.equal(await page.getByRole('button', { name: 'Open menu' }).getAttribute('aria-expanded'), 'false', `${width}px menu closes after navigation`);
      assert.equal(await page.locator('#main-nav').evaluate(element => getComputedStyle(element).visibility), 'hidden', `${width}px closed menu is hidden`);
    } else {
      await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: /Contact us/i }).click();
      await page.waitForURL('**/contact');
    }
    if (width === 390) {
      await page.locator('input[name="name"]').fill('Test User');
      await page.locator('input[name="email"]').fill('test@example.com');
      await page.locator('select[name="service"]').selectOption('Bulk Haulage');
      await page.locator('textarea[name="details"]').fill('Test load details');
      await page.getByRole('button', { name: /Create email enquiry/i }).click();
      assert.match(await page.getByRole('status').textContent(), /Opening your email application/);
    }
    await context.close();
  }
  const reduced = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await reducedPage.locator('.home-offer-grid > a').first().waitFor();
  assert.equal(await reducedPage.locator('.home-offer-grid > a').first().evaluate(element => getComputedStyle(element).opacity), '1', 'Reduced motion keeps content visible');
  assert.equal(await reducedPage.locator('video').evaluate(element => element.paused), true, 'Reduced motion keeps the hero video paused');
  await reduced.close();
  if (failures.length) throw new Error(`Horizontal overflow:\n${failures.join('\n')}`);
  console.log(`Checked ${routes.length} routes at ${widths.join(', ')}px in Edge Chromium; navigation and enquiry form passed.`);
} finally {
  await browser.close();
}

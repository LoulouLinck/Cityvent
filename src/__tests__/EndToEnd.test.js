import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 250, // slow down by 250ms,
      timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-item');
  });

  afterAll(() => {
    browser.close();
  });

  //Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-item .event-details');
    expect(eventDetails).toBeNull();
  });

  //Scenario 2
  test('User can expand an event to see details', async () => {
    await page.click('.event-item .details-btn');
    const eventDetails = await page.$('.event-item .event-details');
    expect(eventDetails).toBeDefined();
  });

  //Scenario 3
  test('User can collapse an event to hide details', async () => {
    await page.click('.event-item .details-btn');
    const eventDetails = await page.$('.event-item .event-details');
    expect(eventDetails).toBeNull();
  });
});
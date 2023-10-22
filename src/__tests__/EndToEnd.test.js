import puppeteer from 'puppeteer';

describe('Feature: Show/Hide Event Details', () => {
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



describe('Feature: Filter Events By City', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 250, timeout: 0 });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-item');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn`t searched for a city, show upcoming events from all cities', async () => {
    const events = await page.$$('.event-item');
    expect(events.length).toBe(32); // Assuming there are 32 events by default
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city-search .city-input', 'Berlin');
    const suggestionsOnPage = await page.$$('.city-search .suggestions .suggestion-item');
    expect(suggestionsOnPage.length).toBeGreaterThan(0);
  });

  test('User can select a city from the suggested list', async () => {
    await page.evaluate(() => document.querySelector('.city-search .city-input').value = '');
    await page.type('.city-search .city-input', 'Berlin');

    // Wait for the suggestions to be loaded
    await page.waitForSelector('.city-search .suggestions .suggestion-item');

    // Get all suggestion items
    const suggestions = await page.$$('.city-search .suggestion-item');

    // Check if there are enough suggestions to click on the second one
    if (suggestions.length > 1) {
      await suggestions[0].click(); // Click on the second suggestion
    } else {
      throw new Error('Not enough suggestions found');
    }

    const inputValue = await page.$eval('.city-search .city-input', input => input.value);
    expect(inputValue).toBe('Berlin, Germany');

    const events = await page.$$('.event-item');
    // You would need to verify the number of events displayed matches the expected number for Berlin, Germany
    expect(events.length).toBe(17);
  });
});

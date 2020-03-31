const puppeteer = require("puppeteer-core");
// const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/path/to/Chrome'
    });
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
    await page.screenshot({ path: 'example.png' });

    await page.close();
    await browser.close();
})();
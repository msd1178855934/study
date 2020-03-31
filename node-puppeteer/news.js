const puppeteer = require("puppeteer-core");

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/path/to/Chrome'
    });
    const page = await browser.newPage();
    await page.goto("https://news.google.com", { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'news.pdf', format: 'A4' });

    await browser.close();
})();

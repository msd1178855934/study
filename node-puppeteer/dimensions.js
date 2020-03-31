const puppeteer = require("puppeteer-core");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: '/path/to/Chrome'
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.mainFrame().addScriptTag({
        url: 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
    });

    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
        }
    });

    console.log("Dimensions:", dimensions);

    await browser.close();
})();
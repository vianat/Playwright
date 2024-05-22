import {Before, BeforeAll, After, AfterAll, Status} from "@cucumber/cucumber";
import {Browser, Page, BrowserContext, chromium} from "@playwright/test";
import {pagefixture} from "./pageFixture";

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll( async function() {
    browser = await chromium.launch({headless:true});
});

Before(async function(){
    page = await browser.newPage();
    pagefixture.page = page;

    this.context = await browser.newContext({
        viewport: null,
        ignoreHTTPSErrors: true,
        acceptDownloads: true
    });
    this.page = await this.context?.newPage();
});

After( async function({ pickle, result }) {
    // Screenshots of Failed TCs only
    if(result?.status == Status.FAILED) {
        const image = await pagefixture.page.screenshot({
            // await pagefixture.page.screenshot({ path: 'screenshots/screenshot.png' });
            path: `./cucumber-test-result/screenshots/${pickle.name}.png`, type: "png"
        });
        await this.attach(image, "image/png");
    }
 
    // Screenshot after each test
        // const image = await pageFixture.page.screenshot({
        //     path:`./cucumber-test-result/screenshots/${pickle.name}.png`, type: "png"
        // });
        // await this.attach(image, "image/png");
    await page.close();
    // await context.close(); // не пашет
 });
 
 // AfterStep( async function({ pickle, result }) {
 //     // Screenshot after each step
 //     const image = await pageFixture.page.screenshot({
 //         path:`./cucumber-test-result/screenshots/${pickle.name}.png`, type: "png"
 //     });
 //     await this.attach(image, "image/png");
 // });
 
 AfterAll( async function() {
    await browser.close();
 });
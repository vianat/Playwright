import { Locator, Page } from "@playwright/test";

export default class BasePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;

    }
    async navigateTo(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }    
    async clickElement(el: Locator){
        await el.click();
    }    
    async fillFormField(el: Locator, text: string){
        await el.fill(text);
    }    
    async getElementText(el: Locator): Promise<string>{
        return el.innerText();
    }    
    async waitForElementVisible(selector: string){
        await this.page.waitForSelector(selector, {state: 'visible'});
    }    
    async waitForElementHidden(selector: string){
        await this.page.waitForSelector(selector, {state: 'hidden'});
    }    
    async takeScreenshot(fileName: string){
        await this.page.screenshot({path: fileName});
    }
}
import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class HomePage extends BasePage{
    page: Page;
    private readonly settingsButon: Locator;

    constructor(page:Page){
        super(page);
        this.settingsButon = page.locator("a[href='#settings']");
    }
 
    async clickSettingsButon(){
        await this.clickElement(this.settingsButon);
    }

}
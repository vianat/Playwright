import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SettingsPage extends BasePage{
    page: Page;
    private readonly logOutButon: Locator;

    constructor(page:Page){
        super(page)
        this.logOutButon = page.locator('//button[contains(text(),"Or click here to logout.")]');
    }
 
    async clickLogOutButon(){
        await this.clickElement(this.logOutButon);
    }

}
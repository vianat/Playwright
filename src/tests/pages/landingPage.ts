import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class LandingPage extends BasePage{
    readonly page: Page;
    private signInButton: Locator;

    constructor(page:Page){
        super(page);
        this.signInButton = page.locator("//a[contains(text(),'Sign in')]");
    }

    async clickSignInButton(){
        await this.clickElement(this.signInButton);
    }
}
import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export class SignInPage extends BasePage{
    page: Page;
    readonly emailTextBox: Locator;
    readonly passwordTextBox: Locator;
    private readonly signInButon: Locator;

    constructor(page:Page){
        super(page);
        this.emailTextBox = page.locator('input[placeholder="Email"]');
        this.passwordTextBox = page.locator('input[placeholder="Password"]');
        this.signInButon = page.locator('//button[@type="submit"]');
    }

    async enterEmail(email: string){
        await this.fillFormField(this.emailTextBox, email);
    }    
    async enterPassword(password: string){
        await this.fillFormField(this.passwordTextBox, password);
    }    
    async clickSignInButton(){
        await this.clickElement(this.signInButon);
    }
    async signIn(){
    }
}
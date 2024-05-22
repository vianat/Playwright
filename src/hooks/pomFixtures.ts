import { test as baseTest} from '@playwright/test';
import { LandingPage } from '../tests/pages/landingPage';
import { HomePage } from '../tests/pages/homePage';
import { SettingsPage } from '../tests/pages/settingsPage';
import { SignInPage } from '../tests/pages/signInPage';

type pages = {
    landingPage: LandingPage,
    homePage: HomePage,
    settingsPage: SettingsPage,
    signInPage: SignInPage
}
const testPages = baseTest.extend<pages>({
    landingPage: async({page}, use) => {
        await use(new LandingPage(page));
    },
    homePage: async({page}, use) => {
        await use(new HomePage(page));
    },
    settingsPage: async({page}, use) => {
        await use(new SettingsPage(page));
    },
    signInPage: async({page}, use) => {
        await use(new SignInPage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;
import { test, expect } from '../hooks/pomFixtures';
 
test('Login test using POM', async ({ page, landingPage, homePage, settingsPage, signInPage }) => {
 
    await page.goto('https://react-redux.realworld.io/');

  await landingPage.clickSignInButton();
  await signInPage.enterEmail("playwrightdemo@gmail.com");
  await signInPage.enterPassword("playwrightdemo");
  await signInPage.clickSignInButton();
  await homePage.clickSettingsButon();
  await settingsPage.clickLogOutButon();
  await page.close();
});
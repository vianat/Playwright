import { expect } from '@playwright/test';
import { pagefixture } from "../../hooks/pageFixture";
import {Given, When, Then} from '@cucumber/cucumber';

Given('go to {string}', async function (url) {
  await pagefixture.page.goto(url);
  await pagefixture.page.waitForLoadState();
  // await pagefixture.page.waitForTimeout(500);
})

Then('check element visibility', async () => {

  await expect(pagefixture.page.locator('#displayed-text')).toBeVisible();
  await pagefixture.page.locator('#hide-textbox').click();
  await expect(pagefixture.page.locator('#displayed-text')).toBeHidden();
});

Then('check element present', async () => {
  await expect(pagefixture.page.locator('.added-manually')).not.toHaveCount(1);
  await pagefixture.page.locator("button[onclick='addElement()']").click();
  await expect(pagefixture.page.locator('.added-manually')).toHaveCount(1);
});

Then('check enable element', async () => {
  await expect(pagefixture.page.locator('#property')).toBeEnabled();
  await expect(pagefixture.page.locator('button[title="Disabled button"]')).toBeDisabled();
});

Then('check text match', async () => {
  await expect(pagefixture.page.locator('#property')).toHaveText("How tall & fat I am?");
});

Then('check element attributes', async () => {
  await expect(pagefixture.page.locator('#property')).toHaveAttribute("class", /.*button/);
  await expect(pagefixture.page.locator('#property')).toHaveAttribute("class", /.*is-success/);
  await expect(pagefixture.page.locator('#property')).toHaveAttribute("class", /.*button is-success/);
  await expect(pagefixture.page.locator('#property')).toHaveAttribute("class", "button is-success");
});

Then('check url & title', async () => {
  await expect(pagefixture.page).toHaveTitle(/.*Interact with Button fields/);
});

Then('screenshot', async function () {
    await pagefixture.page.screenshot({ path: 'screenshots/screenshot.png' });
});

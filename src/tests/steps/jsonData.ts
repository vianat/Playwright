import dataFromJSON from "./../data/credentials.json"
import { pagefixture } from "../../hooks/pageFixture";
import {Given, When, Then} from '@cucumber/cucumber';


Then('use data from json', async () => {

    await pagefixture.page.locator("#user-name").fill(dataFromJSON.valid_user_name);
    await pagefixture.page.locator("#password").fill(dataFromJSON.valid_password);

    await pagefixture.page.locator("#login-button").click();

    await pagefixture.page.locator("#add-to-cart-sauce-labs-backpack").click();
    await pagefixture.page.locator('[data-test="shopping-cart-link"]').click();

    await pagefixture.page.getByRole('button', { name: 'Open Menu' }).click();
    await pagefixture.page.locator('[data-test="logout-sidebar-link"]').click();
})

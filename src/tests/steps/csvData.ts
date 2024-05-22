import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';
import {Given, When, Then} from '@cucumber/cucumber';
import { pagefixture } from "../../hooks/pageFixture";

let dataFromCSV = parse(fs.readFileSync(path.join(__dirname, 'data', '../../data/orangeData.csv')), {
    columns: true,
    skip_empty_lines: true,
});

Given("valid csv", async () => {
    // console.log(this);
    await pagefixture.page.locator("#user-name").fill(dataFromCSV[0].username);
    await pagefixture.page.locator("#password").fill(dataFromCSV[0].password);
    await pagefixture.page.locator("#login-button").click();
});

Then("invalid csv", async () => {

    await pagefixture.page.locator("#user-name").fill(dataFromCSV[1].username);
    await pagefixture.page.locator("#password").fill(dataFromCSV[1].password);

    await pagefixture.page.locator("#login-button").click();
});

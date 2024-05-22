import { expect } from '@playwright/test';
import { pagefixture } from "../../hooks/pageFixture";
import {Given, When, Then} from '@cucumber/cucumber';

Then('text box', async () => {

  await expect(pagefixture.page.locator('#enabled-example-input')).toBeVisible();

  await pagefixture.page.locator('#enabled-example-input').pressSequentially('123456', {delay: 200});

  await pagefixture.page.locator('#enabled-example-input').press('Tab');

});

Then('left click', async () => {
  await pagefixture.page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await pagefixture.page.waitForLoadState();

  await pagefixture.page.locator('#click_area').click();

  await expect(pagefixture.page.locator('#click_type')).toBeVisible();

  await expect(pagefixture.page.locator('#click_type')).toHaveText('Click');

});

Then('double click', async () => {

  await pagefixture.page.locator('#click_area').dblclick();

  await expect(pagefixture.page.locator('#click_type')).toBeVisible();

  await expect(pagefixture.page.locator('#click_type')).toHaveText('Double-Click');

});

Then('right click', async () => {
  await pagefixture.page.goto('https://play1.automationcamp.ir/mouse_events.html');
  await pagefixture.page.waitForLoadState();

  await pagefixture.page.locator('#click_area').click({button: 'right'});

  await expect(pagefixture.page.locator('#click_type')).toBeVisible();

  await expect(pagefixture.page.locator('#click_type')).toHaveText('Right-Click');

});

Then('radio button', async () => {

  const bmw = pagefixture.page.locator('#bmwradio');
  const benz = pagefixture.page.locator('#benzradio');
  const honda = pagefixture.page.locator('#hondaradio');

// check before v1
  expect(bmw).not.toBeChecked;
  expect(benz).not.toBeChecked;
  expect(honda).not.toBeChecked;
// check before v2
  expect(await bmw.isChecked()).toBeFalsy();
  expect(await benz.isChecked()).toBeFalsy();
  expect(await honda.isChecked()).toBeFalsy();

  await bmw.check();

// check after v1
  await expect(bmw).toBeChecked;
  expect(await bmw.isChecked()).toBeTruthy();

});

Then('check box', async () => {

  const bmw = pagefixture.page.locator('#bmwcheck');
  const benz = pagefixture.page.locator('#benzcheck');
  const honda = pagefixture.page.locator('#hondacheck');

// check before v1
  expect(bmw).not.toBeChecked;
  expect(benz).not.toBeChecked;
  expect(honda).not.toBeChecked;
// check before v2
  expect(await bmw.isChecked()).toBeFalsy();
  expect(await benz.isChecked()).toBeFalsy();
  expect(await honda.isChecked()).toBeFalsy();

  await bmw.check();
  await benz.check();
  await honda.check();

// check after v1
  await expect(bmw).toBeChecked;
  await expect(benz).toBeChecked;
  await expect(honda).toBeChecked;

  expect(await bmw.isChecked()).toBeTruthy();
  expect(benz).toBeChecked;
  expect(await honda.isChecked()).not.toBeFalsy();

});

Then('single dropdown', async () => {

  await pagefixture.page.selectOption('#carselect', {value: 'honda'});

});

Then('alert', async () => {

  pagefixture.page.on('dialog', async (alert: any) => {
    const alertMessage = alert.message();
    expect(alertMessage).toEqual('Hello , share this practice page and share your knowledge');
    await alert.accept();
  })
  
    await pagefixture.page.locator('#alertbtn').click();
});

Then('table', async () => {

  const table = pagefixture.page.locator("#productTable");
  const colomns = table.locator("th");
  const rows = table.locator("tr");

  // console.log(await colomns.count());
  // console.log(await rows.count());
  // await expect(checkDataInTable(rows, page, "25").toHaveText("25"));

    const matchedRow = rows.filter({
      has: pagefixture.page.locator("td"),
      hasText: "Product 5"
    })
    await matchedRow.locator("input").check();

  // await page.pause();
});

Then('pagination table', async () => {

  const pages = pagefixture.page.locator("#pagination li a");
  const totalPages = await pages.count();

  const table = pagefixture.page.locator("#productTable");
  const colomns = table.locator("th");
  const rows = table.locator("tr");

  // console.log("number of pages " + totalPages);

  for (let p = 0; p < totalPages; p++) {
    if(p > 0){
      await pages.nth(p).click();
    }
    for(let i =0; i< await rows.count(); i++){
      const row = rows.nth(i);
      const rowData = row.locator("td");
      for(let j = 0; j < await rowData.count(); j++){
        const cellContent = await rowData.nth(j).textContent();
        // console.log(cellContent)
      }
    }
  }
});

Then('iframe', async () => {

  // ver 1
    const allFrames = pagefixture.page.frames();
    const allFramesCount = allFrames.length;
    // console.log("total frames "+ allFramesCount);
    const frame1 = pagefixture.page.frame({url: "https://www.letskodeit.com/courses"});
    await frame1?.locator("(//input[@id='search'])[1]").fill("playwright");

  await pagefixture.page.waitForTimeout(3000);
});

Then('single tab window', async () => {

  const [newTab] = await Promise.all([
    pagefixture.page.waitForEvent('popup'),
    await pagefixture.page.click("#opentab")
  ])
  await newTab.waitForLoadState();
  newTab.locator("(//input[@id='search'])[1]").click();
  newTab.locator("(//input[@id='search'])[1]").fill("1234567890");
  await newTab.waitForTimeout(1000);

  newTab.close()
});

Then('single window', async () => {
  await pagefixture.page.locator('.analystic[href="#Seperate"]').click();

  const [newWindow] = await Promise.all([
    pagefixture.page.waitForEvent('popup'),
      await pagefixture.page.click('button[onclick="newwindow()"]')
  ])

  await newWindow.waitForLoadState();
  await newWindow.locator('#navbarDropdown').click();
  await newWindow.locator('a[href="/about"]').click();
  await newWindow.close();

  await pagefixture.page.close();
});

Then('multiple tabs', async () => {

  await pagefixture.page.locator('.analystic[href="#Multiple"]').click();

  const [multipleTab] = await Promise.all([
    pagefixture.page.waitForEvent('popup'),
      await pagefixture.page.click('button[onclick="multiwindow()"]')
  ])

  await multipleTab.waitForLoadState();
  const pages = multipleTab.context().pages();
  // console.log("Total pages opened:" + pages.length);
  await multipleTab.close();

  const [newPage] = await Promise.all([
    pagefixture.page.waitForEvent('popup'),
    pagefixture.page.click('button[onclick="multiwindow()"]')
  ]);

  await newPage.waitForLoadState();
  await newPage.fill('//*[@id="email"]', 'bratok');
  // await page[1].locator('input[placeholder="Email id for Sign Up"]').fill('bratok');
  // await multipleTab.waitForTimeout(2000);

  // await pages[2].waitForTimeout(2000);
  // await pages[2].locator('#navbarDropdown').click();
  // await pages[2].locator('a[href="/about"]').click();
  // await multipleTab.waitForTimeout(2000);

  // await pages[1].close();
  // await pages[2].close();
  await pagefixture.page.close();
});

Then('calendar use npm luxon lib', async () => {
  await pagefixture.page.locator("#today_ID_Link").click();
  await pagefixture.page.waitForLoadState();

  await pagefixture.page.locator("(//td[text()='1'])[1]").click();
  await pagefixture.page.locator("(//img[@align='baseline'])[2]").click();

  await pagefixture.page.locator("(//td[text()='25'])[2]").click();
  await pagefixture.page.locator("//input[@type='submit']").click();
  
  await pagefixture.page.waitForTimeout(1000);
});

Then('drag and drop', async () => {

  const el = pagefixture.page.locator("#draggable");
  const target = pagefixture.page.locator("#droppable");

  await el.hover();
  await pagefixture.page.mouse.down();  
  await target.hover();
  await pagefixture.page.mouse.up();
});

Then('drag and drop 2', async () => {

  const el = pagefixture.page.locator("#draggable");
  const target = pagefixture.page.locator("#droppable");

  await el.dragTo(target);
});

Then('file download 1', async () => {

      await pagefixture.page.locator('#textbox').click();
      await pagefixture.page.locator('#textbox').pressSequentially('Work !');
      await pagefixture.page.locator('#createTxt').click();
  
      const download = await Promise.all([
        pagefixture.page.waitForEvent('download'),
        pagefixture.page.locator('#link-to-download').click()
      ])
  
      const path = await download[0].path();
      // console.log("Downloaded Path ... " + path);
  
      // Way 1 -> Using default file name
      // const fileName = download[0].suggestedFilename();
      // await download[0].saveAs(fileName);
  
      // Way 2 -> Custom file name
      const customisedFileName = "Downloaded_File";
      await download[0].saveAs(customisedFileName);
  
      await pagefixture.page.locator('#link-to-download').click();

});

Then('file download 2', async () => {

  await pagefixture.page.locator("//a[@class='btn btn-primary']").click;
  // await page.locator("#textbox").click;
  // await page.locator("#textbox").pressSequentially("fufel");
  // await page.locator("#createTxt").click;

  const download = await Promise.all([
    pagefixture.page.waitForEvent('download'),
    pagefixture.page.locator("#link-to-download").click()
  ]);

  const name = "Downloaded_File";
  await download[0].saveAs(name);
});

Then('Upload multiple Files - Approach 1', async () => {
  const uploadFile = await Promise.all([
    pagefixture.page.waitForEvent('filechooser'),
    pagefixture.page.locator('input[name="files[]"]').click()
  ]);

  await uploadFile[0].setFiles([
    'src/tests/data/FilesToUpload/file1.jpg',
    'src/tests/data/FilesToUpload/file1.jpg'
]);
  await pagefixture.page.waitForTimeout(3000);
});
  
Then('Upload multiple Files - Approach 2', async () => {
  await pagefixture.page.setInputFiles('input[name="files[]"]', [
      'src/tests/data/FilesToUpload/file1.jpg',
      'src/tests/data/FilesToUpload/file1.jpg'
    ]);
  await pagefixture.page.waitForTimeout(3000);
});
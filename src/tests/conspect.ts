/** 
 * npx playwright test testname.spec.ts --project=chromium --headed
 * 
 * npx playwright --help
 * npx playwright test                                  - run all tests
 * --project=chromium                                   - run chromium only
 * --headed                                             - run with UI
 * --workers=3                                          - run in 3 threads
 * 
 * 
 * npx playwright test testname.spec.ts                 - run only one test
 * npx playwright codegen                               - open chrome codegen record
 * npx playwright codegen --browser firefox/webkit      - open firefox/webkit codegen record
 * npx playwright codegen -o ./tests/newTest.spec.ts    - open codegen record and copy code in new file
 * npx playwright codegen --viewport-size==800,600      - open chrome codegen record with size
 * npx playwright codegen --device="iPhone 14 Pro Max"  - open chrome codegen for device (list of devices names from chrome devtools)
 * 
 * 
 * await page.locator('text=Login').click();                - click by text
 * await page.locator('input:has-text("Login")').click();   - click by text
 * 
 * 
 * allure -> install :
 *      npm i -D allure-playwright allure-commandline
 *      add in config -> reporter: [['html'],['allure-playwright']],
 * npx allure generate ./allure-results/ --clean
 * npx allure open ./allure-report/
 * 
 * allure auto generate and open report :
 *    npm install rimraf mkdir --save-dev
 *    add script in package.json ->
 *   "scripts": {
        "clean:reports": "rimraf allure-report allure-results && mkdir allure-report allure-results",
        for MAC "rm -rf allure-report allure-results && mkdir -p allure-report allure-results"
        "generate:reports": "npx allure generate ./allure-results/ --clean",
        "open:reports": "npx allure open ./allure-report/",
        "pretest": "npm run clean:reports",
        "posttest": "npm run generate:reports && npm run open:reports",
        "execute:script": "npx playwright test",
        "test": "npm run execute:script || npm run posttest"
  },


  npx ts-node ./src/helper/reportGenerate.ts     open result dashboard
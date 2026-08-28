import { test, expect } from '@playwright/test'
import * as xlsx from 'xlsx'

const workbook = xlsx.readFile("D:/EXCEL/login_cred.xlsx");
const sheet = workbook.Sheets['LOGIN'];
const excelData = xlsx.utils.sheet_to_json(sheet);

for (let data of excelData) {
  test(`Login SwagLabs using ${data.USERNAME}`, async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.locator("//input[@id='user-name']").fill(data.USERNAME.trim());
    await page.locator("//input[@id='password']").fill(data.PASSWORD.trim());
    await page.locator("//input[@id='login-button']").click();
  });
}

// npm install xlsx
// const workbook=xlsx.readFile("D:/EXCEL/login_cred.xlsx");
// const sheet=workbook.Sheets['LOGIN'];
// const excelData=xlsx.utils.sheet_to_json(sheet);

// for(let data of excelData){

//     test(`Login SwagLabs using ${data.USERNAME}`,async({page})=>{
//         await page.goto("https://www.saucedemo.com/");

//         await page.locator('//input[@id="user-name"]').fill(data.USERNAME.trim());
//         await page.locator('//input[@id="password"]').fill(data.PASSWORD.trim());
//         await page.locator('//input[@id="login-button"]').click();

//     })
// }

// npm install xlsx

// [
//     {
//         "S.NO":1,
//         "USERNAME":"standard_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":2,
//         "USERNAME":"problem_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":3,
//         "USERNAME":"performance_glitch_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":4,
//         "USERNAME":"error_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":5,
//         "USERNAME":"visual_user",
//         "PASSWORD":"secret_sauce"
//     }
// ]


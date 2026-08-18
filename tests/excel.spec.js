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

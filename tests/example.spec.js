const { test, expect } = require("@playwright/test");
test("Valid Login", async ({ page }) => {
  await page.goto("https://www.aljaberoptical.com/");
  await page.locator("#newSignin").click();
  await page.locator("#userinput").waitFor({ state: "visible" });
  await page.locator("#userinput").fill("payalchadhanirag@gmail.com");
  await page.locator("[value='Proceed']").click();
  await page.locator("text=Use Password?").waitFor({ state: "visible" });
  await page.locator("text=Use Password?").click();
  await page.locator("#password").fill("nirag@123");
  await page.locator("form[name='f-signin'] button[type='submit']").click();
  await page.waitForTimeout(5000);
});

test("wrong password", async ({ page }) => {
  await page.goto("https://www.aljaberoptical.com/");
  await page.locator("#newSignin").click();
  await page.locator("#userinput").waitFor({ state: "visible" });
  await page.locator("#userinput").fill("payalchadhanirag@gmail.com");
  await page.locator("[value='Proceed']").click();
  await page.locator("text=Use Password?").waitFor({ state: "visible" });
  await page.locator("text=Use Password?").click();
  await page.locator("#password").fill("nirag123");
  await page.locator("form[name='f-signin'] button[type='submit']").click();
  await expect(page.locator("#toast-container")).toBeVisible();
  await page.waitForTimeout(5000);
});

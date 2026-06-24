const { test, expect } = require("@playwright/test");
test("Valid signup", async ({ page }) => {
  await page.goto("https://www.aljaberoptical.com/");
  await page.locator("#newSignin").click();
  await page.locator("#userinput").waitFor({ state: "visible" });
  await page.locator("#userinput").fill("testerauto@gmail.com");
  await page.locator("[value='Proceed']").click();
  await page.locator("#countryCode").click();
  await page.locator("#userNumber").waitFor({ state: "visible" });
  await page.locator("#userNumber").fill("558495965");
  await page.locator("#firstName").fill("testtest");
  await page.locator("#lastName").fill("tester");
  await page.locator("#passwordset").fill("test@123");
  await page.locator("text=Register").click();
  await expect(page.locator(".toast-success")).toBeVisible();
  await expect(page).toHaveURL("https://www.aljaberoptical.com/");
  await page.waitForTimeout(5000);
});

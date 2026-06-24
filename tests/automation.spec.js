const { test, expect } = require("@playwright/test");
test("add to cart", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.locator("text= Products").waitFor({ state: "visible" });
  await page.locator('a[href="/products"]').click();
  await page.getByText("Add to cart").first().click();
  await page.locator('a[href="/view_cart"]').waitFor({ state: "visible" });
  await page.locator('a[href="/view_cart"]').click();
  await page.getByRole("button", { name: "Proceed To Checkout" }).click();
  await page.locator('a[href="/login"]').click;
  await page.locator('[data-qa = "login-email"]').fill("standard_user");
  await page.locator('[data-qa="login-password"]').fill("secret_sauce");
  await page.locator('[data-qa="login-button"]').click();
  await page.pause();
});

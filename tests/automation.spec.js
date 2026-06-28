const { test, expect } = require("@playwright/test");
test("add to cart", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await page.locator("text= Products").waitFor({ state: "visible" });
  await page.locator('a[href="/products"]').click();
  await page.locator(".product-image-wrapper").first().hover();
  await page.locator(".product-overlay .add-to-cart").first().click();
  await page
    .locator(".modal-body a[href='/view_cart']")
    .waitFor({ state: "visible" });
  await page.locator(".modal-body a[href='/view_cart']").click();
  await page.locator(".check_out").click();
  await page.getByRole("link", { name: "Register / Login" }).click();
  await page
    .locator('[data-qa = "login-email"]')
    .fill("testunique@mailinator.com");
  await page.locator('[data-qa="login-password"]').fill("test@123");
  await page.locator('[data-qa="login-button"]').click();
  await page.locator("a[href='/view_cart']").first().click();
  await page.getByText("Proceed To Checkout").click();
  await page.getByRole("link", { name: "Place Order" }).click();
  await page.locator('[data-qa = "name-on-card"]').fill("Test User");
  await page.locator('[data-qa = "card-number"]').fill("4111111111111111");
  await page.locator('[data-qa = "cvc"]').fill("311");
  await page.locator('[data-qa = "expiry-month"]').fill("12");
  await page.locator('[data-qa = "expiry-year"]').fill("2027");
  await page.locator("#submit").click();
  await page.pause();
});

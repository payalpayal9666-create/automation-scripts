const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
test("valid login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("payalchadhanirag@gmail.com", "Nirag@123");
  await expect(page).toHaveURL("https://www.aljaberoptical.com/");
});

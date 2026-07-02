const { test, expect } = require("@playwright/test");
const { SignupPage } = require("../pages/SignupPage");

test("valid signup", async ({ page }) => {
  const signupPage = new SignupPage(page);
  await signupPage.goto();
  await signupPage.signup(
    "bills@mailinator.com",
    "+91",
    "7895944848",
    "bill",
    "billtest",
    "Test@123",
  );
  await expect(page).toHaveURL("https://www.aljaberoptical.com/");
  await page.waitForTimeout(5000);
});

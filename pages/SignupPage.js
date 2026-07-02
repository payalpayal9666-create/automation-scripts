class SignupPage {
  constructor(page) {
    this.page = page;
    this.signinBtn = this.page.locator("#newSignin");
    this.emailInput = this.page.locator("#userinput");
    this.nextBtn = this.page.locator("[value='Proceed']");
    this.countryDropdown = this.page.locator("#countryCode");
    this.numberInput = this.page.locator("#userNumber");
    this.firstNameInput = this.page.locator("#firstName");
    this.lastnameInput = this.page.locator("#lastName");
    this.createPasswordInput = this.page.locator("#passwordset");
    this.registeredBtn = this.page.locator("text=Register");
  }
  async goto() {
    await this.page.goto("https://www.aljaberoptical.com/");
  }

  async signup(email, countryCode, phonenumber, firstname, lastname, password) {
    await this.signinBtn.click();
    await this.emailInput.fill(email);
    await this.nextBtn.click();
    await this.countryDropdown.selectOption(countryCode);
    await this.numberInput.fill(phonenumber);
    await this.firstNameInput.fill(firstname);
    await this.lastnameInput.fill(lastname);
    await this.createPasswordInput.fill(password);
    await this.registeredBtn.click();
  }
}

module.exports = { SignupPage };

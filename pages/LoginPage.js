class LoginPage{
constructor(page){
   this.page = page;

   this.loginBtn= this.page.locator("#newSignin");
   this.emailInput= this.page.locator("#userinput");
   this.nextBtn= this.page.locator("[value='Proceed']");
   this.usePassword = this.page.locator("text=Use Password?");
   this.passwordInput= this.page.locator("#password");
   this.signInBtn= this.page.getByRole("button", {name: "Proceed"});
}


   async goto(){
    await this.page.goto("https://www.aljaberoptical.com/")
   }

   async login(email,password){
   await this.loginBtn.click();
   await this.emailInput.fill(email);
   await this.nextBtn.click();
   await this.usePassword.waitFor({ state: "visible" });
   await this.usePassword.click();
   await this.passwordInput.fill(password);
   await this.signInBtn.click();
   }
    }

    module.exports = { LoginPage };
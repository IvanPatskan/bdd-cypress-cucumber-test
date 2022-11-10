import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const loginPage = require('../../pageobjects/loginPage')

Given("User navigates to the Website", () => {
    loginPage.open()
});

When("User fills username {string}", (username) => {
    loginPage.inputEmail.type(username)
});

When("User fills password {string}", (password) => {
    loginPage.inputPassword.type(password)
});
When("User clicks submit button", () => {
    loginPage.submitButton.click()
});

Then("Home page appears after successful login", () => {
    loginPage.title.should('have.text','Products')
});

Then("{string} error message appears", (errorMessage) => {
    loginPage.errorMessage.should('have.text',errorMessage)
});


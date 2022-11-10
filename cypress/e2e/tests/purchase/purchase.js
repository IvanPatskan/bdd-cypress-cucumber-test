import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import searchProduct from '../../Pages//SearchProductPage/SearchProductPage.spec';
//import homePage from '../../Pages/HomePage/HomePage.spec';
const loginPage = require('../../pageobjects/loginPage')
const homePage = require('../../pageobjects/homePage')
const cartPage = require('../../pageobjects/cartPage')
const orderPage = require('../../pageobjects/orderPage')

Given("User navigates to the Website", () => {
    loginPage.open()
});

Given("User logs in", () => {
    loginPage.loginUser()
});

When("User clicks on add to cart button", () => {
    homePage.addToCartButton.click()
});

When("User clicks on cart button", () => {
    homePage.cartButton.click()
});

When("User clicks on remove button", () => {
    cartPage.removeButton.click()
});

When("User clicks on checkout button", () => {
    orderPage.checkoutButton.click()
});

When("User fills post infromation", () => {
    orderPage.fillPostalInfo('Firstname', 'Lastname', '55000')
});

When("User clicks on finish button", () => {
    orderPage.finishButton.click()
});

Then("Item appears in cart", () => {
    cartPage.cartItem.should('exist')
    cartPage.cartItemTitle.should('have.text','Sauce Labs Backpack')
});

Then("Item should desapear from cart", () => {
    cartPage.cartItem.should('not.exist')
});

Then("{string} text appears", (message) => {
    orderPage.successMessage.should('have.text', message)
});

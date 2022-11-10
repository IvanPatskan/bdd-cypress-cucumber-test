const Page = require("./page")

class OrderPage extends Page {

    get checkoutButton(){
        return cy.get('#checkout')
    }

    get firstName(){
        return cy.get('#first-name')
    }
    get lastName(){
        return cy.get('#last-name')
    }
    get postalCod(){
        return cy.get('#postal-code')
    }
    get continueButton(){
        return cy.get('#continue')
    }

    get finishButton(){
        return cy.get('#finish')
    }

    get successMessage(){
        return cy.get('h2[class="complete-header"]')
    }

    fillPostalInfo(firstName, lastName, postalCode){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.postalCod.type(postalCode)
        this.continueButton.click()
    }
}

module.exports =new OrderPage()
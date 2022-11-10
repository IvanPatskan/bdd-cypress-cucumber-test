const Page = require("./page")

class Login extends Page {

    open (){
        return super.open('')
    }

    get inputEmail(){
        return cy.get('#user-name')
    }

    get inputPassword(){
        return cy.get('#password')
    }

    get submitButton(){
        return cy.get('#login-button')
    }

    get title(){
        return cy.get('span[class="title"]')
    }

    get errorMessage(){
        return cy.get('h3[data-test="error"]')
    }

    loginUser(){
        this.open()
        this.inputEmail.type('standard_user')
        this.inputPassword.type("secret_sauce")
        this.submitButton.click()
    }
}

module.exports =new Login()
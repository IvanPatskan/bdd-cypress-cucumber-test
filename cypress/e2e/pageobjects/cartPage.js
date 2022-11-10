const Page = require("./page")

class CartPage extends Page {

    get removeButton(){
        return cy.get('#remove-sauce-labs-backpack')
    }

    get cartItem(){
        return cy.get('div[class="cart_item"]')
    }

    get cartItemTitle(){
        return cy.get('#item_4_title_link')
    }
}

module.exports =new CartPage()
const Page = require("./page")

class HomePage extends Page {

    open (){
        return super.open('/inventory.html')
    }

    get addToCartButton(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    get cartButton(){
        return cy.get('a[class="shopping_cart_link"]')
    }

    get removeButton(){
        return cy.get('#remove-sauce-labs-backpack')
    }
}

module.exports =new HomePage()
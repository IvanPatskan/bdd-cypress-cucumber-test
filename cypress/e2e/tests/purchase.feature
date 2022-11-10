Feature: Purchase

Background:
Given User navigates to the Website
And User logs in

Scenario: User wants to add item to cart
When User clicks on add to cart button
And User clicks on cart button
Then Item appears in cart

Scenario: User wants to delete item from cart
When User clicks on add to cart button
And User clicks on cart button
And User clicks on remove button
Then Item should desapear from cart

Scenario: User wants to buy item
When User clicks on add to cart button
And User clicks on cart button
And User clicks on checkout button
And User fills post infromation
And User clicks on finish button
Then "THANK YOU FOR YOUR ORDER" text appears

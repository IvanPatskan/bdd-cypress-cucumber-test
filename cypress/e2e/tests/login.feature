Feature: Login

Background:
Given User navigates to the Website

Scenario: User wants to LogIn with valid creds
When User fills username "standard_user"
And User fills password "secret_sauce"
And User clicks submit button
Then Home page appears after successful login

Scenario: User wants to LogIn with invalid username
When User fills username "invalid_username"
And User fills password "secret_sauce"
And User clicks submit button
Then 'Epic sadface: Username and password do not match any user in this service' error message appears

Scenario: User wants to LogIn with invalid Password
When User fills username "standard_user"
And User fills password "wrong_password"
And User clicks submit button
Then 'Epic sadface: Username and password do not match any user in this service' error message appears

Scenario: User wants to LogIn with empty username
When User fills password "secret_sauce"
And User clicks submit button
Then 'Epic sadface: Username is required' error message appears

Scenario: User wants to LogIn with empty password
When User fills username "standard_user"
And User clicks submit button
Then 'Epic sadface: Password is required' error message appears

Scenario: Locked user wants to LogIn with empty password
When User fills username "locked_out_user"
And User fills password "secret_sauce"
And User clicks submit button
Then 'Epic sadface: Sorry, this user has been locked out.' error message appears
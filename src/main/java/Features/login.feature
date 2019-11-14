Feature: Free CRM Login Feature

#Without Examples Keyword
#Scenario: Free CRM Login Test Scenario
#
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "adminbaba" and "ozonepark1"
#Then user clicks on login button
#Then user is on home page
#Then close the browser

#With Examples Keyword
Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>" 
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
	| username | password |
	| adminbaba | ozonepark1 |
	| tom		| test@123	|

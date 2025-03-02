import { HomePage } from "../support/pageObjects/HomePage";

describe('Technical test - Excercise 1', () => {
  //step 1 from worksheet
  beforeEach(function() {
    cy.visit('')
    cy.manageCookies()
    cy.fixture('data.json').as('data')
  });

  //steps  2a, 2b
  it('Validate website is displayed correctly', function() {
    cy.url().should('eq', Cypress.config('baseUrl'));
    HomePage.locators.qubikaLogo().should('be.visible')
  })

  //steps 3, 3a, 3b, 3c
  it('Validate contact form is displayed successfully', function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.firstNameField().should('be.visible')
    HomePage.locators.emailField().should('be.visible')
    HomePage.locators.submitButton().scrollIntoView().should('be.visible')
  });

  //steps 5, 6, 7, 8
  it('Validate error messages are displayed on incompleted fields in contact form', function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.submitButton().scrollIntoView().click()
    HomePage.validateEmptyFieldErrorMessages()
    HomePage.locators.contactUsModalFirstNameField().type(this.data.firstName)
    HomePage.validateEmptyFieldErrorMessages()
  });

  //steps 9, 10, 11, 12  
  it('Validate contact form is closed properly and data completed is retained after closing and reopening form', 
    function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.contactUsModalFirstNameField().type(this.data.firstName)
    HomePage.locators.submitButton().scrollIntoView().click()
    HomePage.clickCloseContactUsModal()
    HomePage.locators.contactUsModal().should('not.exist')
    HomePage.validateEmptyFieldErrorMessages()
  });





})
import { HomePage } from "../support/pageObjects/HomePage";

describe('Technical test - Excercise 1', () => {
  beforeEach(function() {
    cy.visit('')
    cy.manageCookies()
    cy.fixture('data.json').as('data')
  });

  it('Validate website is displayed correctly', function() {
    cy.url().should('eq', Cypress.config('baseUrl'));
    HomePage.locators.qubikaLogo().should('be.visible')
  })

  it('Validate contact form is displayed successfully', function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.contactUsModal().should('be.visible', { timeout: 5000 })
    HomePage.locators.firstNameField().should('be.visible')
    HomePage.locators.emailField().should('be.visible')
    HomePage.locators.submitButton().scrollIntoView().should('be.visible')
  });

  it('Validate error messages are displayed on incompleted fields in contact form', function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.contactUsModal().should('be.visible', { timeout: 5000 })
    HomePage.locators.submitButton().scrollIntoView().click()
    HomePage.validateEmptyFieldErrorMessages()
    HomePage.locators.contactUsModalFirstNameInput().type(this.data.firstName)
    HomePage.validateEmptyFieldErrorMessages()
  });

  it('Validate contact form is closed properly and data completed is retained after closing and reopening form', 
    function() { 
    HomePage.clickContactUsButton()
    HomePage.locators.contactUsModal().should('be.visible', { timeout: 5000 })
    HomePage.locators.contactUsModalFirstNameInput().type(this.data.firstName)
    HomePage.locators.submitButton().scrollIntoView().click()
    HomePage.clickCloseContactUsModal()
    HomePage.locators.contactUsModal().should('not.exist')
    HomePage.validateEmptyFieldErrorMessages()
  });





})
import { HomePage } from "../support/pageObjects/HomePage";

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('')
    cy.manageCookies()
  });

  it('Validate website is displayed correctly,', () => {
    cy.url().should('eq', Cypress.config('baseUrl'));
    HomePage.locators.qubikaLogo().should('be.visible')
  })

  it('Validate contact form is displayed', () => {
    
    HomePage.clickContactUsButton()
    HomePage.locators.firstNameField().should('be.visible')
    HomePage.locators.emailField().should('be.visible')
    HomePage.locators.submitButton().scrollIntoView().should('be.visible')
  });
})
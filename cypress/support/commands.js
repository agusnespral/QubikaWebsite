// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// manage cookies popup with parameters
Cypress.Commands.add('manageCookies', (action = 'accept') => {
    cy.get('.cky-consent-bar').should('be.visible'); 
  
    if (action === 'accept') {
      cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').click(); 
    } else if (action === 'reject') {
      cy.get('.cky-notice-btn-wrapper > .cky-btn-reject').click(); 
    } else if (action === 'customize') {
      cy.get('.cky-btn-customize').click(); 
    } 
  });
  
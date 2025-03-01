class homePage {

    locators = {
        qubikaLogo: ()=> cy.get('.main-header .logo'),
        contactUsButton: ()=> cy.get('.button.rounded.big-btn.contact-us-modal-open').contains('Contact Us'),
        firstNameField: ()=> cy.get('#firstname-5e204c31-ede2-4976-a096-6919a081b2df'),
        emailField: ()=> cy.get('#email-5e204c31-ede2-4976-a096-6919a081b2df').should('be.visible'),
        submitButton: ()=> cy.get('.hs-button')

    }

    //methods

    clickQubikaLogo() {
        this.locators.qubikaLogo().click();
    };

    clickContactUsButton() {
        this.locators.contactUsButton().click();
    }

}

export const HomePage = new homePage
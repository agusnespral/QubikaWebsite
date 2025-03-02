class homePage {

    locators = {
        qubikaLogo: () => cy.get('.main-header .logo'),
        contactUsButton: () => cy.get('.button.rounded.big-btn.contact-us-modal-open').contains('Contact Us'),
        firstNameField: () => cy.get('#firstname-5e204c31-ede2-4976-a096-6919a081b2df'),
        emailField: () => cy.get('#email-5e204c31-ede2-4976-a096-6919a081b2df').should('be.visible'),
        submitButton: () => cy.get('.hs-button'),
        closeButtonContactUs: () => cy.get('.modal-scroller .icon-x'),
        contactUsModal: () => cy.get('.modal.contact-us-modal.show'),
        contactUsModalFirstNameField: () => cy.get('.hs_firstname'),
        contactUsModalLastNameField: () => cy.get('.hs_lastname'),
        contactUsModalEmailField: () => cy.get('.hs_email'),
        contactUsModalCompanyField: () => cy.get('.hs_company'),
        contactUsModalContactTypeField: () => cy.get('.hs_contact_type'),
        contactUsModalMessageField: () => cy.get('.hs_message'),
        contactUsModalFirstNameInput: () => cy.get('#firstname-5e204c31-ede2-4976-a096-6919a081b2df')
    }

    contactUsKeys = [
        'contactUsModalFirstNameField',
        'contactUsModalLastNameField',
        'contactUsModalEmailField',
        'contactUsModalCompanyField',
        'contactUsModalContactTypeField',
        'contactUsModalMessageField'
    ];

    //methods

    clickQubikaLogo() {
        this.locators.qubikaLogo().click();
    };

    clickContactUsButton() {
        this.locators.contactUsButton().click();
    };

    clickCloseContactUsModal() {
        this.locators.closeButtonContactUs().click();
    };

    validateEmptyFieldErrorMessages() {
        this.contactUsKeys.forEach((key) => {
          this.locators[key]().then(($field) => {
            // Look for the error message element within the field using the specified selector
            const $errorElement = $field.find('.hs-error-msg.hs-main-font-element');
            if ($errorElement.length > 0) {
              cy.wrap($errorElement)
                .should('have.text', 'Please complete this required field.');
            } else {
              cy.log(`Field ${key} is complete.`);
            }
          });
        });
      }
    }



export const HomePage = new homePage
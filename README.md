# QubikaWebsite

Qubika Technical Test - Exercise 1 - Cypress with JS

Step-by-step running instructions

1. Open your terminal and verify node and npm installation
   node -v
   npm -v
   In case they are not installed, donwdload and install Node.js from nodejs.org

2. Clone repository. Run in your terminal:
   git clone https://github.com/agusnespral/QubikaWebsite.git

3. Navigate into the project folder:
   cd QubikaWebsite

4. In the directory where the repo was cloned, install all dependences listed in package.json:
   npm install

5. To execute test cases on headless mode, run:
   npx cypress run

To select an specific browser use:
npx cypress run --browser chrome
npx cypress run --browser edge
npx cypress run --browser firefox

5. To open and execute from Cypress Test Runner, run:
   npx cypress open
   Click on "E2E Testing"
   Select a browser
   Click on "Start E2E Testing in..."
   Click spec.cy.js

6. Solution explained
   12 steps from the worksheet were divided in 4 test cases
   Validate website is displayed correctly - steps 2a and 2b
   Validate contact form is displayed successfully - steps 3 and 4a, 4b, 4c
   Validate error messages are displayed on incompleted fields in contact form - steps 5, 6, 7, 8
   Validate contact form is closed properly and data completed is retained after closing and reopening form - steps 9, 10, 11, 12
   (step 1 is validated on the beforeEach)

Page Object Model was create with locators and methods to interact those locators
A fixture for static data was created
The test file (spec.cy.js) imports the Page Object Model (POM) and interacts with its locators and methods, resulting in code that is easy to read and maintain.

3. Enhacements
   Expand test coverage
   Add more locators and methods to the POM, in order to reduce time when creating the test cases
   Reduce the use of specific waits (added on the suite to fix issues with headless runs)

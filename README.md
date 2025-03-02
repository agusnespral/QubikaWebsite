# QubikaWebsite
Qubika Technical Test - Exercise 1 - Cypress with JS  

Step-by-step for running test suit
1. Open your terminal and verify node and npm installation
node -v
npm -v
In case they are not installed, donwdload and install Node.js from nodejs.org

2. Clone repository. Run in your terminal:
git clone https://github.com/agusnespral/QubikaWebsite.git

4. Navigate into the project folder:
cd QubikaWebsite

3. In the directory where the repo was cloned, install all dependences listed in package.json:
npm install

4. To execute test cases on headless mode, run:
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

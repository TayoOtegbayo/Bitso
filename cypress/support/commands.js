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


Cypress.Commands.add('login',(usrname, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#client_id').type('tayootegbayo@gmail.com')  //Enter the email
    cy.get('#password').type('P@ssw0rd')   //Enter the password
    cy.get('form > :nth-child(3) > .styles__StyledButton-sc-1mfj3x4-0').click()  //Click the login button
    cy.wait(6000)  //App wait for 5s
    
})

Cypress.Commands.add('deposit',()=>{
    cy.get('span[class="moon-arrow_deposit"]').click()   // Click deposit
    //cy.wait(4000)
    cy.get('.styles__WrapperContainer-sc-1yl4qxp-5').should('have.text','Oops! Something went wrong could not get result from upstream')


})
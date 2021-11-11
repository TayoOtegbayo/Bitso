/// <reference types="cypress"/>

describe('The second scenario', function(){

    it('Registration test', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.visit(' https://stage.bitso.com/r/user/beneficiaries/add')    // Launch the URL
        cy.get('#first_name').type('Excel')
        //cy.get('#first_name').should('be.visible').type('Excel')
        cy.get('#last_name').type('Tayo')
        cy.get('#second_last_name').type('Authe')

        cy.get('.styles__Container-sc-1d1h13w-0 euNyBf>div>div>div>div>div>div>div>div>div').click()
        cy.get('span[class="styles__DropdownIcon-sc-6qm6qf-1 kvmdyO moon-select_arrow"]').select('3').should('have.value','3')
        cy.get(':nth-child(2) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').select('January').should('have.value','January')
        cy.get(':nth-child(3) > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5').select('1998').should('have.value','1998')
        cy.get('.css-1dqiyfp').select('Relative').should('have.value','Relative')
        cy.get('#percentage').type('40')



    })

})
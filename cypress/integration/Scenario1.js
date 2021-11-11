/// <reference types="cypress"/>

describe('The first scenario', function(){

    //beforeEach(() => {
      //  cy.visit(' https://stage.bitso.com/login')      // Launch the URL
      //  cy.login('tayootegbayo@gmail.com','P@ssw0rd')
        //cy.log('I run before every test in every spec file!!!!!!')
      //})

    it('BTC Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="btc"]').should('be.visible').click()   //Click BTC
        cy.deposit()   //deposit activities
    })


    it('ETH Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="eth"]').should('be.visible').click()   //Click ETH
        cy.deposit()   //deposit
        
    })


    it('BCH Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="bch"]').should('be.visible').click()   //Click BCH
        cy.deposit()   //deposit
        
    })


    it('DAI Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="dai"]').should('be.visible').click()   //Click DAI
        cy.deposit()   //deposit
        
    })


    it('XRP Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="xrp"]').should('be.visible').click()   //Click XRP
        cy.deposit()   //deposit
    })


    it('MANA Testing', function(){
        cy.visit(' https://stage.bitso.com/login')      // Launch the URL
        cy.login('tayootegbayo@gmail.com','P@ssw0rd')   //login to the app
        cy.get('label[for="mana"]').should('be.visible').click()   //Click mana
        cy.deposit()   //deposit
    })


})
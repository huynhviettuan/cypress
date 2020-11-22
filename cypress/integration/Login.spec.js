/// <reference types="cypress" />
import AdminPage from '../pages/PageObjects/AdminPage';
import LoginPage from '../pages/PageObjects/LoginPage'

context('Login', () => {

  const loginPage = new LoginPage();
  const adminPage = new AdminPage();

  beforeEach(() => {

    cy.visit('/');

  })

  it('Username cannot be emty', () => {

    cy.log('Not input username textbox')
    loginPage.clickDynamicElement(loginPage.dynamicTextBox,loginPage.usernameTextBox);
    loginPage.clickHeader();

    cy.log('Verify error message');
    cy.fixture('login_data').then((data) => {
      loginPage.getElement(loginPage.labelUserID).should('have.text', data.UserIDErrorMSG);
    });

    cy.log('Verify background color');
    loginPage.getElement(loginPage.labelHeader).invoke('css', 'background-color').should('eq', 'rgb(248, 155, 81)');
    loginPage.getElement(loginPage.labelHeader).invoke('css', 'background-color').then(($header) => {
      cy.wrap($header).should('eq', 'rgb(248, 155, 81)');
    });

    cy.log('Login successfully');
    loginPage.login(Cypress.env('username'), Cypress.env('password'));
    adminPage.getElement(adminPage.labelHeading).should('have.text', "Welcome To Manager's Page of Guru99 Bank");

  })
})

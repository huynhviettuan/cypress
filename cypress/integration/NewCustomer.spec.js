/// <reference types="cypress" />
import AdminPage from '../pages/PageObjects/AdminPage';
import LoginPage from '../pages/PageObjects/LoginPage'
import NewCustomerPage from '../pages/PageObjects/NewCustomerPage'
import {Pages} from '../pages/Commons/Enums';
import * as DataHelper from '../pages/Utilities/DataHelper'

context('New Customer', () => {


  const loginPage = new LoginPage();
  const adminPage = new AdminPage();
  const newCustomerPage = new NewCustomerPage();
  const user = DataHelper.generateUser();

  before(() => {

    cy.log("Go to New Customer Page");
    cy.visit('/');
    loginPage.login(Cypress.env('username'), Cypress.env('password'));
    adminPage.clickDynamicElement(adminPage.dynamicLink, Pages.NewCustomer);

  })

  it('Create new customer account and check created successfully', () => {
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.customerName,user.fullname);
    newCustomerPage.checkElement(newCustomerPage.gender,user.gender);
    newCustomerPage.enterDOB(user.dob);
    newCustomerPage.enterAdderss(user.address);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.city,user.city);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.state,user.state);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.pin,user.pin);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.mobileNumber,user.phone);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.email,user.email);
    newCustomerPage.enterDynamicElement(newCustomerPage.dynamicTextBox,newCustomerPage.password,user.password);
    newCustomerPage.clickDynamicElement(newCustomerPage.dynamicButton,newCustomerPage.submit);
    adminPage.getElement(adminPage.labelTableHeading).should('have.text', "Customer Registered Successfully!!!");
  })
})

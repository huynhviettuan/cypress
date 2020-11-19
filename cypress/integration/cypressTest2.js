import DemoPage from '../page/PageObjects/DemoPage';

describe('My Second Cypress Test', () => {
  
  const demoPage = new DemoPage();


  it('Visits the ToolsQA Demo Page and check the Interactions menu items', function () {
    //Visit the Demo QA Website
    cy.visit("https://demoqa.com/");
    demoPage.clickInteractionsMenuItem();
  })
})
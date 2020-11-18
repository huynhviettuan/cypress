
describe('My First Cypress Test', function() {
    it('Visit site demo', function(){
        cy.log("Step 1 : Go to website")
        cy.visit("https://demoqa.com/");
        cy.log("Step 2 : Verify")
        cy.get(':nth-child(4) > :nth-child(1) > .avatar > svg', {timeout: 10000}).should('be.visible').click();
        cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);
    })
})
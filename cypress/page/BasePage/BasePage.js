export default class BasePage {

    getCyElement(locator, options) {
        cy.log('Get element: ' + locator);
        if (locator.startsWith('//') || locator.includes('(//')) {
            return cy.xpath(locator, options);
        }
        return cy.get(locator, options);
    }

    getCyChildElement(parentElement, locator, options) {
        cy.log('Get child element: ' + locator + 'from parent element');
        if (locator.startsWith('//') || locator.includes('(//')) {
            return parentElement.xpath(locator, options);
        }
        return parentElement.get(locator, options);
    }

    clear(locator) {
        cy.log('Clear text for : ' + locator);
        return this.getCyElement(locator).focus().type('{backspace}').clear();
    }

    enter(locator, inputString) {
        cy.log('Enter on: ' + locator);
        return this.getCyElement(locator).type(inputString, 15);
    }

    click(locator) {
        cy.log('Click on : ' + locator);
        return this.getCyElement(locator).click();
    }

    clickMultipleTime(locator) {
        cy.log('Click multiple time on : ' + locator);
        return this.getCyElement(locator).click({ multiple: true }).should('not.exist');
    }

    selectDropdown(locator, option) {
        this.getCyElement(locator).select(option);
    }


}
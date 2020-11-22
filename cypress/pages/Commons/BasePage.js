import * as StringHelper from '../Utilities/StringHelper';
import BasePageUI from './BasePageUI';
export default class BasePage extends BasePageUI {

    constructor() {
        super();
    }

    getElement(locator, options) {
        cy.log('Get element: ' + locator);
        if (locator.startsWith('//') || locator.includes('(//')) {
            return cy.xpath(locator, options);
        }
        return cy.get(locator, options);
    }

    getDynamicElement(locator, formatLocator) {
        return this.getElement(StringHelper.format(locator, [formatLocator]));
    }

    clearElement(locator) {
        cy.log('Clear text for : ' + locator);
        return this.getElement(locator).focus().clear();
    }
    clearDynamicElement(locator, formatLocator) {
        cy.log('Clear text for : ' + StringHelper.format(locator, [formatLocator]));
        return this.getDynamicElement(locator, formatLocator).focus().clear();

    }
    enterElement(locator, inputString) {
        this.clearElement(locator);
        cy.log('Enter on: ' + locator);
        return this.getElement(locator).type(inputString, 15);
    }

    enterDynamicElement(locator, formatLocator, inputString) {
        this.clearDynamicElement(locator, formatLocator);
        cy.log('Enter on: ' + StringHelper.format(locator, [formatLocator]));
        return this.getDynamicElement(locator, formatLocator).type(inputString, 15);
    }

    clickElement(locator) {
        cy.log('Click on : ' + locator);
        return this.getElement(locator).click();
    }

    clickDynamicElement(locator, formatLocator) {
        cy.log('Click on : ' + StringHelper.format(locator, [formatLocator]));
        return this.getDynamicElement(locator, formatLocator).click();
    }

    clickElementMultipleTime(locator) {
        cy.log('Click multiple time on : ' + locator);
        return this.getElement(locator).click({ multiple: true }).should('not.exist');
    }

    selectDropdown(locator, option) {
        cy.log('Select dropdown : ' + locator + 'value: ' + option);
        this.getElement(locator).select(option);
    }

    selectDynamicDropdown(locator, formatLocator, option) {
        cy.log('Select dropdown : ' + locator + 'value: ' + option);
        this.getDynamicElement(locator, formatLocator).select(option);
    }

    selectDropdownByIndex(locator, index) {
        this.getElement(locator).find('option').eq(index).then((dropdownIndex) => {
            this.selectDropdown(locator, dropdownIndex.val());
        });
    }

    checkElement(nameCheckBox, valueCheckBox) {
        this.getDynamicElement(this.dynamicCheckBox, nameCheckBox).xpath(StringHelper.format('input[@value = "{}"]', [valueCheckBox])).then(($checkbox) => {
            cy.wrap($checkbox).click();
        })
    }
    waitForVisible(locator) {
        this.getElement(locator).should('be.visible').then(() => {
            cy.log('Element visible: ' + locator);
        });
    }

    waitForInvisible(locator) {
        this.getElement(locator).should('be.visible');
        this.getElement(locator).should('not.be.visible').then(() => {
            cy.log('Element invisible: ' + locator);
        });;
    }

}
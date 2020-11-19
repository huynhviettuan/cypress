/// <reference types="cypress" />

class commonfunction {
    
    getCyElement(locator) {
        const type = locator.replace(new RegExp("([\\w\\s]*)=.*", 'g'), "$1").trim();
        const body = locator.replace(new RegExp("[\\w\\s]*=(.*)", 'g'), "$1").trim();
        switch ((type.toLowerCase())) {
            case "css":
                return cy.get(locator);
            default:
                return cy.xpath(locator);
        }
    }

    clickElement(locator){
        this.getCyElement(locator).click();
    }

}

export default commonfunction
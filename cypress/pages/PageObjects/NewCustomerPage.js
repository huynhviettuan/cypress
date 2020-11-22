import BasePage from '../Commons/BasePage';

export default class NewCustomerPage extends BasePage {
    constructor() {
        super();
        this.customerName = 'Customer Name';
        this.gender = 'Gender';
        this.textBoxDateOfbirth = '//input[@id="dob"]';
        this.textAreaAddress = '//textarea[@name = "addr"]';
        this.city = 'City';
        this.state = 'State';
        this.pin = 'PIN';
        this.mobileNumber = 'Mobile Number';
        this.email = 'E-mail';
        this.password = 'Password';
        this.submit = 'Submit';
        this.reset = 'Reset';
    }

    enterDOB(dob) {
        this.getElement(this.textBoxDateOfbirth).invoke('removeAttr', 'type').then(($dob) => {
            cy.wrap($dob).type(dob, 15);
        })
    }

    enterAdderss(address){
        this.enterElement(this.textAreaAddress,address);
    }
}
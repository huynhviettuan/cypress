import BasePage from '../Commons/BasePage';

export default class AdminPage extends BasePage {
    constructor() {
        super();
        this.newCustomer = 'New Customer';
        this.editCustomer = 'Edit Customer';
        this.deleteCustomer = 'Delete Customer';
        this.labelHeading = '//marquee[@class = "heading3"]';
        this.labelTableHeading = '//p[@class= "heading3"]';
    }
}
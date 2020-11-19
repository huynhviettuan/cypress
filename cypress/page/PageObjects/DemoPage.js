import BasePage from '../BasePage/BasePage';

export default class DemoPage extends BasePage {
    constructor() {
        super();
        this.comboBoxInteractions = ':nth-child(5) > :nth-child(1) > .avatar > svg';
    }

    clickInteractionsMenuItem() {
        this.click(this.comboBoxInteractions);
    }

}
import BasePage from '../Commons/BasePage';

export default class LoginPage extends BasePage {
    constructor() {
        super();
        this.linkVisit = '//a[text()="here"]';
        this.usernameTextBox = 'UserID';
        this.passwordTextBox = 'Password';
        this.loginButton = 'LOGIN';
        this.resetButton = 'RESET';
        this.labelUserID = '//label[@id="message23"]';
        this.labelPassword = '//label[@id="message18"]';
        this.labelHeader = '//h2[text()="Guru99 Bank"]';
    }

    clickLoginButton() {
        this.clickDynamicElement(this.dynamicButton, this.loginButton);
    }

    clickHeader() {
        this.clickElement(this.labelHeader);
    }

    clickVisitLink() {
        this.clickElement(this.linkVisit, this.linkVisit);
    }

    login(userName, password) {
        this.enterDynamicElement(this.dynamicTextBox,this.usernameTextBox,userName);
        this.enterDynamicElement(this.dynamicTextBox,this.passwordTextBox,password);
        this.clickLoginButton();
    }

}
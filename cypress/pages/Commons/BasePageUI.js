export default class BasePageUI {
    constructor() {
        this.dynamicButton = '//input[@value = "{}"]';
        this.dynamicLink = '//a[text() = "{}"]';
        this.dynamicTextBox = '//td[text() = "{}"]/following-sibling::td/input';
        this.dynamicCheckBox = '//td[text()="{}"]/following-sibling::td';
    }
}
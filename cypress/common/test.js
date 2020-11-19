import commonfunction from './commonfunction';

export default class pageobjects extends commonfunction{

    constructor(length) {
       super();
      }

    locator = 'css = :nth-child(4) > :nth-child(1) > .avatar > svg';

    clickToDropdown(){
        this.clickElement(locator);
    }
   
    
}

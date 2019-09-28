import {Selector} from 'testcafe';

class ContactPage {
    constructor(){
        this.ContactButton = Selector ('[href="#contact"]')


    }
}

export default new ContactPage();
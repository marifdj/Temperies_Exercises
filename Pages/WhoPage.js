import {Selector} from 'testcafe';

class WhoPage {
    constructor(){
        this.whoButton = Selector ('[href="#who"]')


    }
}

export default new WhoPage();
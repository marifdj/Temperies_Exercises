import {Selector} from 'testcafe';

class HowPage {
    constructor(){
        this.HowButton = Selector ('[href="#how"]')


    }
}

export default new HowPage();
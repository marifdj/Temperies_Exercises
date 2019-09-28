import {Selector} from 'testcafe';

class WhatPage {
    constructor(){
        this.whatButton = Selector ('[href="#what"]')


    }
}

export default new WhatPage();
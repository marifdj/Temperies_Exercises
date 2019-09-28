import {Selector} from 'testcafe';

class ClientsPage {
    constructor(){
        this.ClientstButton = Selector ('[href="#clients"]')


    }
}

export default new ClientsPage();
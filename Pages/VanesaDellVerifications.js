import {Selector} from 'testcafe';

class VanesaDellVerifications {
    constructor(){
        this.vanesaLinkedinButton = Selector ('[href="http://www.linkedin.com/in/vanesadellacqua/"]')
        this.vanesaTwitterButton = Selector ('[href="https://twitter.com/vanesadellacqua"]')
        this.vanesaSkypeButton = Selector ('[href="skype:vanesadellacqua?chat"]')
        this.vanesaEmailButton = Selector ('[href="mailto:vdellacqua@temperies.com"]')
    }
}

export default new VanesaDellVerifications();
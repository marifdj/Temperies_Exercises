import {Selector} from 'testcafe';

class SocialMediaVerifications {
    constructor(){
        this.facebookButton = Selector ('[href="http://www.facebook.com/temperiesIT?fref=ts"]')
        this.twitterButton = Selector ('[href="https://twitter.com/temperies"]')
        this.skypeButton = Selector ('[href="skype:vanesadellacqua?chat"]')

    }
}

export default new SocialMediaVerifications();
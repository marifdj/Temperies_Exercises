import {Selector, t} from 'testcafe';
import WhoPage from '../Pages/WhoPage';
import SocialMediaVerifications from '../Pages/SocialMediaVerifications';
import WhatPage from '../Pages/WhatPage';
import ContactPage from '../Pages/ContactPage';
import ClientsPage from '../Pages/ClientsPage';
import SocialMediaVerifications from '../Pages/SocialMediaVerifications';
import VanesaDellVerifications from '../Pages/VanesaDellVerifications';

fixture (`Temperies_TestCase2_Links`)

const url ='http://temperies.com';
fixture ('Contact information').page(url);

test ( 'should open all the links from Temperies web', async t => {
    await t
    
.click(WhoPage.whoButton)
.expect(getlocation()).WhoPage.contains('http://temperies.com/#who')

.click(WhatPage.whatButton)
.expect(getlocation()).WhatPage.contains('http://temperies.com/#what')

.click(HowPage.howButton)
.expect(getlocation()).HowPage.contains('http://temperies.com/#how')

.click(ClientsPage.ClientsButton)
.expect(getlocation()).ClientsPage.contains('http://temperies.com/#clients')

.click(ContactPage.ContactButton)
.expect(getlocation()).ContactPage.contains('http://temperies.com/#clients')

.click(SocialMediaVerifications.facebookButton)
.click(SocialMediaVerifications.twitterButton)
.click(SocialMediaVerifications.skypeButton)

.expect(getlocation()).facebookButton.contains('https://www.facebook.com/temperiesIT?fref=ts')
.expect(getlocation()).twitterButton.contains('https://twitter.com/temperies')
.expect(getlocation()).skypeButton.contains('skype:vanesadellacqua?chat')

.click(VanesaDellVerifications.vanesaLinkedinButton)
.click(VanesaDellVerifications.vanesaTwitterButton)
.click(VanesaDellVerifications.skypeButton)
.click(VanesaDellVerifications.vanesaEmailButton)

.expect(getlocation()).vanesaLinkedinButton.contains('https://www.linkedin.com/in/vanesadellacqua/')
.expect(getlocation()).vanesaTwitterButton.contains('https://twitter.com/vanesadellacqua')
.expect(getlocation()).vanesaSkypeButton.contains('skype:vanesadellacqua?chat')
.expect(getlocation()).vanesaEmailButton.contains('')


}); 
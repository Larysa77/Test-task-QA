const LogoutPage = require('../pageobjects/LogoutPage');
const LoginPage = require('../pageobjects/LoginPage'); 
describe('Logout Functionality', () => {
    beforeEach(async () => {
        
        await LoginPage.open(); 
        await LoginPage.login('standard_user', 'secret_sauce'); 
    });

    it('should log out the user and redirect to the login page', async () => {
        
        await LogoutPage.openMenu();

        
        await LogoutPage.clickLogout();

        
        expect(await LogoutPage.isLoginPageDisplayed()).toBe(true);
    });
});

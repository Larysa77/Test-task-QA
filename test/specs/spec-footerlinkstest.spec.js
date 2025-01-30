const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');

describe('Footer Links functionality', () => {
    beforeEach(async () => {
        
        await LoginPage.open(); 
        await LoginPage.login('standard_user', 'secret_sauce'); 
    });

    it('should open Twitter link in a new tab', async () => {
        await InventoryPage.clickTwitterIcon();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]); 
        const url = await browser.getUrl();
        expect(url).toContain('x.com/saucelabs'); 

        await browser.closeWindow(); 
        await browser.switchToWindow(handles[0]); 
    });

    it('should open Facebook link in a new tab', async () => {
        await InventoryPage.clickFacebookIcon();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]); 
        const url = await browser.getUrl();
        expect(url).toContain('facebook.com'); 

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]); 
    });

    it('should open LinkedIn link in a new tab', async () => {
        await InventoryPage.clickLinkedinIcon();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]); 
        const url = await browser.getUrl();
        expect(url).toContain('linkedin.com'); 

        await browser.closeWindow(); 
        await browser.switchToWindow(handles[0]); 
    });
});

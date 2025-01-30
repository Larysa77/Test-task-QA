describe('Footer Links functionality', () => {
    before(async () => {
        
        await browser.url('https://www.saucedemo.com'); 

        const loginField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');

        await loginField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.click();

        
        const inventoryPage = await $('.inventory_list');
        await expect(inventoryPage).toBeDisplayed();
    });

    it('should open Twitter in a new tab', async () => {
        const twitterIcon = await $('footer a[href="https://twitter.com/saucelabs"]');
        
        
        const currentHandles = await browser.getWindowHandles();
        await twitterIcon.click();

        
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > currentHandles.length);
        const newHandles = await browser.getWindowHandles();
        await browser.switchToWindow(newHandles[1]);

        
        const url = await browser.getUrl();
        expect(url).toContain('x.com/saucelabs');

    
        await browser.closeWindow();
        await browser.switchToWindow(currentHandles[0]);
    });

    it('should open Facebook in a new tab', async () => {
        const facebookIcon = await $('footer a[href="https://www.facebook.com/saucelabs"]');
        
        const currentHandles = await browser.getWindowHandles();
        await facebookIcon.click();

        
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > currentHandles.length);
        const newHandles = await browser.getWindowHandles();
        await browser.switchToWindow(newHandles[1]);

        
        const url = await browser.getUrl();
        expect(url).toContain('facebook.com/saucelabs');

        
        await browser.closeWindow();
        await browser.switchToWindow(currentHandles[0]);
    });

    it('should open LinkedIn in a new tab', async () => {
        const linkedinIcon = await $('footer a[href="https://www.linkedin.com/company/sauce-labs/"]');
        
        const currentHandles = await browser.getWindowHandles();
        await linkedinIcon.click();

        
        await browser.waitUntil(async () => (await browser.getWindowHandles()).length > currentHandles.length);
        const newHandles = await browser.getWindowHandles();
        await browser.switchToWindow(newHandles[1]);

        
        const url = await browser.getUrl();
        expect(url).toContain('linkedin.com/company/sauce-labs');

        
        await browser.closeWindow();
        await browser.switchToWindow(currentHandles[0]);
    });
});


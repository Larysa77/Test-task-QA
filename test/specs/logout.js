describe('Logout functionality', () => {
    it('should log the user out and redirect to the login page', async () => {
        
        await browser.url('https://www.saucedemo.com'); 

        
        const loginField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');

        await loginField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.click();

       
        const inventoryPage = await $('.inventory_list');
        await expect(inventoryPage).toBeDisplayed();

        
        const burgerButton = await $('#react-burger-menu-btn');
        await burgerButton.click();

        
        const menuItems = await $$('.bm-item-list a');
        await expect(menuItems).toBeElementsArrayOfSize(4);

        
        const logoutButton = await $('#logout_sidebar_link');
        await logoutButton.click();

        
        const loginPage = await $('#login-button');
        await expect(loginPage).toBeDisplayed();

        
        const usernameFieldValue = await loginField.getValue();
        const passwordFieldValue = await passwordField.getValue();

        expect(usernameFieldValue).toBe('');
        expect(passwordFieldValue).toBe('');
    });
});

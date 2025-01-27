describe('Saving the cart after logout', () => {
    it('should save the cart items after logout and re-login', async () => {
        
        await browser.url('https://www.saucedemo.com'); 
        
        const loginField = await $('#user-name');
        const passwordField = await $('#password');
        const loginButton = await $('#login-button');

        await loginField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.click();

       
        const inventoryPage = await $('.inventory_list');
        await expect(inventoryPage).toBeDisplayed();

       
        const addToCartButton = await $('button.btn_inventory'); // Замість селектора вкажіть ваш
        await addToCartButton.click();

        
        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');

       
        const burgerButton = await $('#react-burger-menu-btn');
        await burgerButton.click();

        
        const menuItems = await $$('.bm-item-list a');
        await expect(menuItems).toBeElementsArrayOfSize(4);

       
        const logoutButton = await $('#logout_sidebar_link');
        await logoutButton.click();

        
        const loginPage = await $('#login-button');
        await expect(loginPage).toBeDisplayed();

        
        await loginField.setValue('standard_user');
        await passwordField.setValue('secret_sauce');
        await loginButton.click();

        
        await expect(inventoryPage).toBeDisplayed();

        
        const cartButton = await $('.shopping_cart_link');
        await cartButton.click();

        
        const cartPage = await $('.cart_list');
    

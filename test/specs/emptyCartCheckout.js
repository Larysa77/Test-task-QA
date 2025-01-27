describe('Checkout without products', () => {
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

    it('should not allow checkout without products in the cart', async () => {
        
        const cartButton = await $('.shopping_cart_link');
        await cartButton.click();

        
        const emptyCartMessage = await $('.cart_list .cart_item');
        await expect(emptyCartMessage).not.toBeDisplayed();

        
        const checkoutButton = await $('button[data-test="checkout"]');
        await checkoutButton.click();

        
        const cartPageHeader = await $('.header_secondary_container .title');
        await expect(cartPageHeader).toHaveText('Your Cart');

        
        const errorMessage = await $('.error-message-container');
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('Cart is empty');
    });
});

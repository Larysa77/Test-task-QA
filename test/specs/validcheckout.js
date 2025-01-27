describe('Valid Checkout functionality', () => {
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

    it('should complete a valid checkout process', async () => {
        
        const addToCartButton = await $('button[data-test="add-to-cart-sauce-labs-backpack"]');
        await addToCartButton.click();

        
        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');

        
        const cartButton = await $('.shopping_cart_link');
        await cartButton.click();

        
        const cartItem = await $('.cart_item');
        await expect(cartItem).toBeDisplayed();

  
        const checkoutButton = await $('button[data-test="checkout"]');
        await checkoutButton.click();

        
        const firstNameField = await $('#first-name');
        const lastNameField = await $('#last-name');
        const postalCodeField = await $('#postal-code');
        const continueButton = await $('input[data-test="continue"]');

        await firstNameField.setValue('John');
        await lastNameField.setValue('Doe');
        await postalCodeField.setValue('12345');
        await continueButton.click();

        
        const overviewPage = await $('.summary_info');
        await expect(overviewPage).toBeDisplayed();
        const productName = await $('.inventory_item_name');
        await expect(productName).toHaveText('Sauce Labs Backpack');

        
        const finishButton = await $('button[data-test="finish"]');
        await finishButton.click();

        
        const completePage = await $('.complete-header');
        await expect(completePage).toHaveText('Thank you for your order!');

        
        const backHomeButton = await $('button[data-test="back-to-products"]');
        await backHomeButton.click();

        
        const emptyCartBadge = await $('.shopping_cart_badge');
        await expect(emptyCartBadge).not.toBeDisplayed();
    });
});

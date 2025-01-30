const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');
const LogoutPage = require('../pageobjects/LogoutPage');
const CartPage = require('../pageobjects/CartPage');

describe('Saving the cart after logout', () => {
    beforeEach(async () => {
        
        await LoginPage.open(); 
        await LoginPage.login('standard_user', 'secret_sauce'); 
    });

    it('should save cart items after logout and login again', async () => {
        
        await CartPage.addItemToCart();

        
        await InventoryPage.openMenu();

        
        await LogoutPage.clickLogout();

        
        await LoginPage.login('standard_user', 'secret_sauce');

        
        await CartPage.openCart();
        const itemCount = await CartPage.getCartItemCount();
        expect(itemCount).toBe(1); 
    });
});

import LoginPage from '../pages/login.page.js';
import InventoryPage from '../pages/inventory.page.js';

describe('Login functionality', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        
        const productCount = await InventoryPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    it('should show error with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('invalid_user', 'wrong_password');

        
        const errorMessage = await LoginPage.getErrorMessage();
        expect(errorMessage).toContain('Username and password do not match');
    });
});

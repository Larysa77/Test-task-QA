const LoginPage = require('../pageobjects/LoginPage');
const InventoryPage = require('../pageobjects/InventoryPage');

describe('Sorting functionality on the Inventory Page', () => {
    beforeEach(async () => {
        
        await LoginPage.open(); 
        await LoginPage.login('standard_user', 'secret_sauce'); 
    });

    it('should sort products by Price (low to high)', async () => {
         "Price (low to high)"
        await InventoryPage.selectSortingOption('Price (low to high)');
        const prices = await InventoryPage.getProductPrices();

        
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices);
    });

    it('should sort products by Price (high to low)', async () => {
        
        await InventoryPage.selectSortingOption('Price (high to low)');
        const prices = await InventoryPage.getProductPrices();

        
        const sortedPrices = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sortedPrices);
    });

    it('should sort products by Name (A to Z)', async () => {
        
        await InventoryPage.selectSortingOption('Name (A to Z)');
        const names = await InventoryPage.getProductNames();

        
        const sortedNames = [...names].sort();
        expect(names).toEqual(sortedNames);
    });

    it('should sort products by Name (Z to A)', async () => {
        
        await InventoryPage.selectSortingOption('Name (Z to A)');
        const names = await InventoryPage.getProductNames();

        
        const sortedNames = [...names].sort().reverse();
        expect(names).toEqual(sortedNames);
    });
});

const InventoryPage = require('../pageobjects/InventoryPage');

describe('Sorting functionality', () => {
    it('should sort products by Price (low to high)', async () => {
        await InventoryPage.open();
        await InventoryPage.sortBy('Price (low to high)');

        const prices = await InventoryPage.getProductPrices();
        const sortedPrices = [...prices].sort((a, b) => a - b); 
        expect(prices).toEqual(sortedPrices); 
    });
});

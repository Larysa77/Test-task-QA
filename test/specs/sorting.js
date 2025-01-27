describe('Sorting functionality', () => {
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

    it('should sort products by Price (low to high)', async () => {
        const sortDropdown = await $('.product_sort_container'); 
        await sortDropdown.selectByVisibleText('Price (low to high)');

        
        const prices = await $$('div.inventory_item_price');
        const priceValues = await Promise.all(prices.map(async (price) => parseFloat(await price.getText().replace('$', ''))));

        
        const isSorted = priceValues.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
        expect(isSorted).toBe(true);
    });

    it('should sort products by Price (high to low)', async () => {
        const sortDropdown = await $('.product_sort_container'); 
        await sortDropdown.selectByVisibleText('Price (high to low)');

        
        const prices = await $$('div.inventory_item_price');
        const priceValues = await Promise.all(prices.map(async (price) => parseFloat(await price.getText().replace('$', ''))));

        
        const isSorted = priceValues.every((val, i, arr) => i === 0 || arr[i - 1] >= val);
        expect(isSorted).toBe(true);
    });

    it('should sort products by Name (A to Z)', async () => {
        const sortDropdown = await $('.product_sort_container');
        await sortDropdown.selectByVisibleText('Name (A to Z)');

        
        const productNames = await $$('div.inventory_item_name');
        const nameValues = await Promise.all(productNames.map(async (name) => await name.getText()));

        
        const isSorted = nameValues.every((val, i, arr) => i === 0 || arr[i - 1].localeCompare(val) <= 0);
        expect(isSorted).toBe(true);
    });

    it('should sort products by Name (Z to A)', async () => {
        const sortDropdown = await $('.product_sort_container'); // Селектор для сортування
        await sortDropdown.selectByVisibleText('Name (Z to A)');

        
        const productNames = await $$('div.inventory_item_name');
        const nameValues = await Promise.all(productNames.map(async (name) => await name.getText()));

        
        const isSorted = nameValues.every((val, i, arr) => i === 0 || arr[i - 1].localeCompare(val) >= 0);
        expect(isSorted).toBe(true);
    });
});

class InventoryPage {
    get sortDropdown() {
        return $('.product_sort_container'); 
    }

    get productNames() {
        return $$('.inventory_item_name'); 
    }

    get productPrices() {
        return $$('.inventory_item_price'); 
    }

    async selectSortingOption(option) {
        await this.sortDropdown.selectByVisibleText(option); 
    }

    async getProductNames() {
        return await Promise.all(this.productNames.map(async (product) => await product.getText())); 
    }

    async getProductPrices() {
        return await Promise.all(this.productPrices.map(async (price) => parseFloat(await price.getText().replace('$', '')))); 
    }
}

module.exports = new InventoryPage();

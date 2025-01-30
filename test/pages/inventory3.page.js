class InventoryPage {
    get productList() {
        return $$('.inventory_item'); 
    }

    async getProductPrices() {
        const prices = await Promise.all(
            (await this.productList).map(async (product) => {
                const priceText = await product.$('.inventory_item_price').getText();
                return parseFloat(priceText.replace('$', '')); 
            })
        );
        return prices;
    }

    async sortBy(option) {
        const sortDropdown = await $('.product_sort_container');
        await sortDropdown.selectByVisibleText(option); 
}
}
module.exports = new InventoryPage();

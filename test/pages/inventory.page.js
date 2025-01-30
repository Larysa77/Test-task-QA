class InventoryPage {
    
    get inventoryItems() { return $$('.inventory_item'); }
    get cartIcon() { return $('.shopping_cart_link'); }

    
    async getProductCount() {
        return await this.inventoryItems.length;
    }

    async clickCart() {
        await this.cartIcon.click();
    }
}

export default new InventoryPage();

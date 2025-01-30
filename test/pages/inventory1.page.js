class InventoryPage {
    get burgerButton() {
        return $('#react-burger-menu-btn'); 
    }
get addToCartButton() {
        return $('.btn_inventory'); 
    }

    get cartButton() {
        return $('.shopping_cart_link'); 
    }
 async addToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
    async openMenu() {
        await this.burgerButton.click();
    }
}

module.exports = new InventoryPage();

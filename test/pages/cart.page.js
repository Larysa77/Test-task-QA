class CartPage {
    get addToCartButton() {
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]'); 
    }
    get checkoutButton() {
        return $('#checkout'); 
    }
    get cartIcon() {
        return $('.shopping_cart_link');
    }
    get emptyCartMessage() {
        return $('.cart_empty_error'); 
    }

    get cartItems() {
        return $$('.cart_item'); 
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async getCartItemCount() {
        return (await this.cartItems).length;
    }
    async clickCheckout() {
        await this.checkoutButton.click();


    }
    async getErrorMessage() {
        return this.emptyCartMessage.getText();
    }
}
module.exports = new CartPage();

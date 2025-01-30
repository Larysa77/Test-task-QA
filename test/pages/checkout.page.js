class CheckoutPage {
    get firstNameField() {
        return $('#first-name'); 
    }

    get lastNameField() {
        return $('#last-name'); 
    }

    get postalCodeField() {
        return $('#postal-code'); 
    }

    get continueButton() {
        return $('#continue'); 
    }

    get finishButton() {
        return $('#finish'); 
    }

    get backHomeButton() {
        return $('#back-to-products'); 
    }

    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.postalCodeField.setValue(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async clickBackHome() {
        await this.backHomeButton.click();
    }
}

module.exports = new CheckoutPage();

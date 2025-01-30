class LoginPage {
    
    get loginInput() {
        return $('#user-name');
    }
    get passwordInput() {
        return $('#password');
    }
    get loginButton() {
        return $('#login-button');
    }
    get inventoryPageHeader() {
        return $('.title');
    }

    
    open() {
        browser.url('https://www.saucedemo.com'); 
    }

    login(username, password) {
        this.loginInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    isInventoryPageDisplayed() {
        return this.inventoryPageHeader.isDisplayed();
    }
}

module.exports = new LoginPage();

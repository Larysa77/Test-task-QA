class LogoutPage {
    get burgerButton() {
        return $('button[id="react-burger-menu-btn"]'); 
    }

    get logoutButton() {
        return $('a[id="logout_sidebar_link"]'); 
    }

    get loginPageHeader() {
        return $('h4'); 
    }

    async openMenu() {
        await this.burgerButton.click();
    }

    async clickLogout() {
        await this.logoutButton.click();
    }

    async isLoginPageDisplayed() {
        return this.loginPageHeader.isDisplayed();
    }
}

module.exports = new LogoutPage();

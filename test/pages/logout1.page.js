class LogoutPage {
    get logoutButton() {
        return $('#logout_sidebar_link'); 
    }

    async clickLogout() {
        await this.logoutButton.click();
    }
}

module.exports = new LogoutPage();

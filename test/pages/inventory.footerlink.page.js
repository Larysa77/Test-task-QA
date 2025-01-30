class InventoryPage {
    get twitterIcon() {
        return $('.social_twitter'); 
    }

    get facebookIcon() {
        return $('.social_facebook'); 
    }

    get linkedinIcon() {
        return $('.social_linkedin'); 
    }

    async clickTwitterIcon() {
        await this.twitterIcon.click();
    }

    async clickFacebookIcon() {
        await this.facebookIcon.click();
    }

    async clickLinkedinIcon() {
        await this.linkedinIcon.click();
    }
}

module.exports = new InventoryPage();

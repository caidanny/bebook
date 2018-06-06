var page = require('./page');

var homePage = Object.create(page, {
    /**
     * define elements
     */
	homePageTitle: { get: function () { return browser.element(".sidebar-header .brand"); } },
	userImage: { get: function () { return browser.element(".header-btn img"); } },
	logOutLink: { get: function () { return browser.element("//button[@class='mat-menu-item']/span[text()='Logout']"); } },
	partnerLink: { get: function () { return browser.element("a[href='#/app/partner']"); } },
	companyLink: { get: function () { return browser.element("a[href='#/app/partner/company']"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } },
	
	logOut: { value: function() {
		page.sleep(10000);
		this.userImage.waitForVisible(30000);
		this.userImage.click();
		this.logOutLink.waitForExist(30000);
		this.logOutLink.waitForVisible(30000);
		this.logOutLink.click();
		page.sleep(30000);
	}},
	
	goToCompanyPage: { value: function() {
		page.sleep(10000);
		this.partnerLink.waitForVisible(30000);
		this.partnerLink.click();
		this.companyLink.waitForExist(30000);
		this.companyLink.waitForVisible(30000);
		this.companyLink.click();
	}}
});

module.exports = homePage;
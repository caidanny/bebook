var page = require('./page');

var homePage = Object.create(page, {
    /**
     * define elements
     */
	companyTable: { get: function () { return browser.element("mat-table.company-table"); } },
	companyNameTextBox: { get: function () { return browser.element("input[name='name']"); } },
	companyEmailTextBox: { get: function () { return browser.element("input[name='email']"); } },
	contactNumberTextBox: { get: function () { return browser.element("input[name='phone']"); } },
	addressOneTextBox: { get: function () { return browser.element("input[name='addressOne']"); } },
	addressTwoTextBox: { get: function () { return browser.element("input[name='addressTwo']"); } },
	stateTextBox: { get: function () { return browser.element("input[name='state']"); } },
	cityTextBox: { get: function () { return browser.element("input[name='city']"); } },
	zipCodeTextBox: { get: function () { return browser.element("input[name='zipcode']"); } },
	activeRadioButton: { get: function () { return browser.element("//div[@class='mat-radio-label-content'][text()='Active']/preceding-sibling::div"); } },
	inactiveRadioButton: { get: function () { return browser.element("//div[@class='mat-radio-label-content'][text()='Inactive']/preceding-sibling::div"); } },
	addNewLink: { get: function () { return browser.element("//div[@class='mat-tab-label-content'][text()='Add new']"); } },
	addButton: { get: function () { return browser.element("//span[@class='mat-button-wrapper'][text()='Add']/.."); } },
	searchIcon: { get: function () { return browser.element("a.button-search"); } },
	searchTextBox: { get: function () { return browser.element("//a[@class='button-search']/../input"); } },
	compannyNameRows: { get: function () { return browser.elements("mat-cell.mat-column-name"); } },
	firstCompanyRow: { get: function () { return browser.element("(//button[contains(@class, 'edit')])[1]"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } },
	
	addNewCompany: { value: function(companyName) {
		this.addNewLink.waitForVisible(30000);
		this.addNewLink.click();
		this.enterCompanyName();
		page.sleep(10000);
		this.companyEmailTextBox.waitForVisible(30000);
		this.companyEmailTextBox.setValue("mwu@operr.com");
		this.contactNumberTextBox.waitForVisible(30000);
		this.contactNumberTextBox.setValue("343-2342-234");
		this.addressOneTextBox.waitForVisible(30000);
		this.addressOneTextBox.setValue("13030 31 Ave");
		this.addressTwoTextBox.waitForVisible(30000);
		this.addressTwoTextBox.setValue("suite 801");
		this.stateTextBox.waitForVisible(30000);
		this.stateTextBox.setValue("New York");
		page.sleep(10000);
		this.cityTextBox.waitForVisible(30000);
		this.cityTextBox.setValue("New York");
		page.sleep(10000);
		this.zipCodeTextBox.waitForVisible(30000);
		this.zipCodeTextBox.setValue("11354");
		page.sleep(10000);
		this.activeRadioButton.waitForVisible(30000);
		this.activeRadioButton.click();
		page.sleep(10000);
		this.clickAddButton();
	}},
	
	searchCompany: { value: function(companyName) {
		this.companyTable.waitForVisible(30000);
		this.searchTextBox.waitForVisible(30000);
		this.searchTextBox.setValue(companyName);
		page.sleep(10000);
	}},
	
	doesSearchWorkProperly: { value: function(companyName) {
		this.compannyNameRows.waitForVisible(30000);
		for(var i = 0;i<this.compannyNameRows.value.length;i++)
		{
			if(!this.compannyNameRows.value[i].element().getText().toLowerCase().includes(companyName.toLowerCase()))
			{
				return false;
			}
		}
		return true;
	}},
	
	clickSearchButton: { value: function() {
		this.companyTable.waitForVisible(30000);
		this.searchIcon.waitForVisible(30000);
		this.searchIcon.click();
		page.sleep(10000);
	}},
	
	clickEditFirstCompany: { value: function() {
		this.firstCompanyRow.waitForVisible(30000);
		this.firstCompanyRow.click();
	}},
	
	enterCompanyName: { value: function() {
		this.companyNameTextBox.waitForVisible(30000);
		this.companyNameTextBox.setValue("ABC" + (Math.random() * 100000) + 1);
		page.sleep(10000);
	}},
	
	clickAddButton: { value: function() {
		this.addButton.waitForVisible(30000);
		this.addButton.click();
	}},
});

module.exports = homePage;
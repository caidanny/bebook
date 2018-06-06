var CompanyPage = require('../pageobjects/company.page');
var timeWait = 30000;

var myStepDefinitionsWrapper = function () {

  this.Then(/^I should see company list$/, function () {
	CompanyPage.companyTable.waitForExist(timeWait);
    expect(CompanyPage.companyTable.isExisting()).toBe(true);
  });
  
  this.When(/^I add new company "([^"]*)"$/, function (companyName) {
	CompanyPage.addNewCompany(companyName);
  });
  
  this.When(/^I search company "([^"]*)"$/, function (companyName) {
	CompanyPage.searchCompany(companyName);
  });
  
  this.When(/^I search company "([^"]*)" by clicking search button$/, function (companyName) {
	CompanyPage.searchCompany(companyName);
	CompanyPage.clickSearchButton();
  });
  
  this.When(/^I click edit button of first company$/, function () {
	CompanyPage.clickEditFirstCompany();
  });
  
  this.Then(/^Search "([^"]*)" should be working properly$/, function (companyName) {
	CompanyPage.companyTable.waitForExist(timeWait);
    expect(CompanyPage.doesSearchWorkProperly(companyName)).toBe(true);
  });
};
module.exports = myStepDefinitionsWrapper;
var HomePage = require('../pageobjects/home.page');
var timeWait = 30000;

var myStepDefinitionsWrapper = function () {

  this.Then(/^I see the title of home page "([^"]*)"$/, function (title) {
	HomePage.homePageTitle.waitForExist(timeWait);
    expect(HomePage.homePageTitle.getText()).toEqual(title);
  });

  this.Then(/^I logout$/, function () {
	HomePage.logOut();
  });
  
  this.When(/^I click Parner -> Company$/, function () {
	HomePage.goToCompanyPage();
  });
};
module.exports = myStepDefinitionsWrapper;
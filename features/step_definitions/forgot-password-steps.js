var ForgotPasswordPage = require('../pageobjects/forgot.password.page');
var timeWait = 30000;

var myStepDefinitionsWrapper = function () {

  this.Then(/^I see the title of forgot password page "([^"]*)"$/, function (title) {
	ForgotPasswordPage.resetPageTitle.waitForExist(timeWait);
    expect(ForgotPasswordPage.resetPageTitle.getText()).toEqual(title);
  });

};
module.exports = myStepDefinitionsWrapper;
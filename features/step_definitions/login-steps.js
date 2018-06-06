var LoginPage = require('../pageobjects/login.page');

var myStepDefinitionsWrapper = function () {
  
  function getValidationMessage (element) {
	  return arguments[0].validationMessage;
  };

  this.When(/^I login with "([^"]*)" "([^"]*)"$/, function (username, password) {
	LoginPage.login(username, password);
  });
  
  this.When(/^I enter username "([^"]*)"$/, function (username) {
	LoginPage.enterUsername(username);
  });
  
  this.When(/^I click login button$/, function () {
	LoginPage.clickLoginButton();
  });
  
  this.When(/^I click forgot password link$/, function () {
	LoginPage.clickForgotPasswordLink();
  });
 
  this.Then(/^I should see validation message for username field$/, function () {
	var message = LoginPage.usernameTextBox.getAttribute('validationMessage');
	expect("Please fill out this field.").toEqual(message);
  });
  
  this.Then(/^I should see validation message for password field$/, function () {
    var message = LoginPage.passwordTextBox.getAttribute('validationMessage');
	expect("Please fill out this field.").toEqual(message);
  });
};
module.exports = myStepDefinitionsWrapper;
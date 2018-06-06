var myStepDefinitionsWrapper = function () {

  this.When(/^I visit "([^"]*)"$/, function (url) {	
    browser.url(url);
	browser.windowHandleMaximize();
  });
};
module.exports = myStepDefinitionsWrapper;
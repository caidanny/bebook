var page = require('./page');

var loginPage = Object.create(page, {
    /**
     * define elements
     */
    usernameTextBox:   { get: function () { return browser.element("input[name='username']"); } },
    passwordTextBox: { get: function () { return browser.element("input[name='password']"); } },
	loginButton: { get: function () { return browser.element("button.mat-primary"); } },
	forgotPasswordLink: { get: function () { return browser.element("a[href='#/forgot-password']"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } },
	
	login: { value: function(username, password) {
        this.enterUsername(username);
		this.enterPassword(password);
		this.clickLoginButton();
    } },
	
	clickLoginButton: { value: function() {
		this.loginButton.click();
	}},
	
	enterUsername: { value: function(username) {
        this.usernameTextBox.setValue(username);
    } },
	
	enterPassword: { value: function(password) {
        this.passwordTextBox.setValue(password);
    } },
	
	clickForgotPasswordLink: { value: function() {
        this.forgotPasswordLink.click();
    } },
});

module.exports = loginPage;
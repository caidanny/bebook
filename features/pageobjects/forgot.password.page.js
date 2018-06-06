var page = require('./page');

var homePage = Object.create(page, {
    /**
     * define elements
     */
	resetPageTitle: { get: function () { return browser.element(".logo>a"); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } }
});

module.exports = homePage;
function Page () {
}

Page.prototype.open = function (path) {
    browser.url(path);
};

Page.prototype.sleep = function (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

module.exports = new Page();
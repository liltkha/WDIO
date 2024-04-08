const { $ } = require("@wdio/globals");
const Page = require('./page');

class NewPastePage extends Page {
  get PostFormtext() {
    return $("#postform-text");
  }

  get PasteExpiration() {
    return $("#postform-expiration");
  }

  get Dropdown() {
    return browser.$(
      "#w0 > div.post-form__bottom > div.post-form__left > div.form-group.field-postform-expiration > div"
    );
  }
  get Expiration() {
    return $("#select2-postform-expiration-results");
  }

  get SelectionExp() {
    $(
      "#w0 > div.post-form__bottom > div.post-form__left > div.form-group.field-postform-status > div > span > span.selection"
    );
  }
  get FormName() {
    return $("#postform-name");
  }

  // get btnSubmit () {
  //     return $('button[type="submit"]');
  // }
}

module.exports = new NewPastePage();

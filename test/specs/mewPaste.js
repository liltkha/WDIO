const newpastePage = require("../pageobjects/newpaste.page");

describe("Task 1 tests", () => {
  it("Create 'New Paste'", async () => {
    await newpastePage.open();
    await newpastePage.PostFormtext.setValue("Hello from WebDriver");

    const dropdown = await newpastePage.Dropdown;
    dropdown.click();
    const value = await newpastePage.Expiration;
    await dropdown.getValue();
    value.click();
    const val = await newpastePage.SelectionExp;
    expect(val).toHaveText("1 Hour");

    await newpastePage.FormName.setValue("helloweb");
    await browser.pause(3000);
  });
});


 // //10 Minutes
    // const dropdown =newpastePage.PasteExpiration;
    // dropdown.selectByVisibleText('value', '10M');
    // const value = dropdown.getValue('value');
    // expect(value).toHaveText('10 Minutes');
    // await browser.pause(3000);

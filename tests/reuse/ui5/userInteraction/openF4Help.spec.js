const {
  handleCookiesConsent
} = require("../../../helper/utils");

describe("userInteraction - openF4Help - use button", function () {

  it("Preparation", async function () {
    await common.navigation.navigateToUrl("https://sapui5.hana.ondemand.com/1.99.0/#/entity/sap.m.Input/sample/sap.m.sample.InputAssisted");
    await handleCookiesConsent();
  });

  it("Execution", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.m.sample.InputAssisted.V",
        "metadata": "sap.m.Input"
      }
    };
    const index = 0;
    const timeout = 30000;
    const useF4Key = false;
    await ui5.userInteraction.openF4Help(selector, index, timeout, useF4Key);
  });

  it("Verification", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.m.sample.InputAssisted.V",
        "metadata": "sap.m.SearchField"
      }
    };
    await ui5.assertion.expectToBeVisible(selector);
    await common.userInteraction.pressEnter();
  });
});
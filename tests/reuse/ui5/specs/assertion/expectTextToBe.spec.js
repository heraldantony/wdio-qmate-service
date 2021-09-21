"use strict";

describe("assertion - expectTextToBe", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    const selector = {
      "elementProperties": {
        "viewName": "sap.ui.demo.cart.view.Welcome",
        "metadata": "sap.m.Title",
        "text": [{
          "path": "i18n>promotedTitle"
        }]
      }
    };
    await ui5.common.assertion.expectTextToBe(selector, "Promoted Items");
  });
});

describe("assertion - expectTextToBe with wrong selector", function () {
  it("Preparation", async function () {
    await browser.url("#/categories");
  });

  it("Execution and Verification", async function () {
    let wrongSelector = {
      "elementProperties": {
        "wrongData": "123"
      }
    };
    await expect(ui5.common.assertion.expectTextToBe(wrongSelector, "Watch"))
      .rejects.toThrow(/uiControlExecuteLocator\(\): No visible elements found/);
    wrongSelector = 123;
    await expect(ui5.common.assertion.expectTextToBe(wrongSelector, "Watch"))
      .rejects.toThrow("waitUntil condition failed with the following reason: javascript error: Cannot read properties of null (reading 'getMetadata')");
  });
});
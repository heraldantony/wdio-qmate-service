describe("navigateToUrl", function () {

  const url = "https://sapui5.hana.ondemand.com/1.99.0/";

  it("Execution", async function () {
    await non_ui5.common.navigation.navigateToUrl(url);
  });

  it("Execution and Verification", async function () {
    await ui5.common.assertion.expectUrlToBe(url);
  });
});

describe("navigateToUrl with wrong url", function () {

  it("Execution and Verification", async function () {
    await expect(non_ui5.common.navigation.navigateToUrl("sd"))
      .rejects.toThrow("invalid argument");
  });
});

describe("navigateToUrl with wrong parameter", function () {

  it("Execution and Verification", async function () {
    await expect(non_ui5.common.navigation.navigateToUrl())
      .rejects.toThrow("Function 'navigateToUrl' failed: Please provide an url as argument.");
  });
});
import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import { faker } from "@faker-js/faker";

describe("login page tests", () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  before(function () {
    cy.fixture("users.json").as("userData");
  });

  it("should login to the application", function () {
    homePage.visitPage();
    homePage.clickMyAccountHeaderButton();
    accountPage.fillUsernameField(this.userData.email);
    accountPage.fillUserPasswordField(this.userData.password);
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfMyAccountNavigation();
  });

  it("should not login to the application with fake data", function () {
    accountPage.visitPage();
    accountPage.fillUsernameField(faker.internet.email());
    accountPage.fillUserPasswordField(faker.internet.password());
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfErrorAfterWrongLogin();
  });

  it("should not login to the application without any data", function () {
    accountPage.visitPage();
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfErrorAfterWrongLogin();
    accountPage.checkIfAlertTextIsCorrectInCaseLoginWithoutData();
  });
});

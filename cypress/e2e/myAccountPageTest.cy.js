import AccountPage from "../page-objects/myAccountPage";
import HomePage from "../page-objects/homePage";
import { beforeEach } from "mocha";

describe("my account page tests", () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  //before(function () {
  //cy.fixture("users.json").as("userData");
  //});
  beforeEach(function () {
    cy.fixture("users.json").as("userData");
    accountPage.visitPage();
    cy.get("@userData").then((userData) => {
      accountPage.login(userData.email, userData.password);
    });
  });

  it("should check all my account section", function () {
    accountPage.checkIfAllMyAccountSectionsAreVisible();
  });
});

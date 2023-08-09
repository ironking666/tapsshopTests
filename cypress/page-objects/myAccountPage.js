import Urls from "./urls";
import { ERROR_MESSAGE_VALUES } from "../support/values";
const userInput = "#username";
const passwordInput = "#password";
const loginButton = 'button[name="login"]';
const myAccountNavigation = ".woocommerce-MyAccount-navigation";
const errorAfterWrongLogin = 'ul[role="alert"]';
const passwordRecoveryLink =
  'a[href="https://tapsshop.pl/?page_id=9&lost-password"]';
const myAccountDashboardSection =
  ".woocommerce-MyAccount-navigation-link--dashboard";
const myAccountOrdersSection = ".woocommerce-MyAccount-navigation-link--orders";
const myAccountDownloadsSection =
  ".woocommerce-MyAccount-navigation-link--downloads";
const myAccountAddressesSection =
  ".woocommerce-MyAccount-navigation-link--edit-address";
const myAccountSection = ".woocommerce-MyAccount-navigation-link--edit-account";
const logoutSection = ".woocommerce-MyAccount-navigation-link--customer-logout";

class AccountPage {
  fillUsernameField(email) {
    cy.get(userInput).type(email);
  }

  fillUserPasswordField(password) {
    cy.get(passwordInput).type(password);
  }
  login(email, password) {
    cy.get(userInput).type(email);
    cy.get(passwordInput).type(password);
    cy.get(loginButton).click();
  }

  clickLoginButton() {
    cy.get(loginButton).click();
  }
  clickPasswordRecoveryLink() {
    cy.get(passwordRecoveryLink).click();
  }
  checkPasswordRecoveryLinkURLValidation() {
    cy.url().should("eq", "https://tapsshop.pl/?page_id=9&lost-password");
  }

  checkVisibilityOfMyAccountNavigation() {
    cy.get(myAccountNavigation).should("be.visible");
  }

  checkVisibilityOfErrorAfterWrongLogin() {
    cy.get(errorAfterWrongLogin).should("be.visible");
  }

  checkIfAlertTextIsCorrectInCaseLoginWithIncorrectData() {
    cy.get(errorAfterWrongLogin).contains(
      ERROR_MESSAGE_VALUES.loginWithIncorrectData
    );
  }

  checkIfAlertTextIsCorrectInCaseLoginWithoutData() {
    cy.get(errorAfterWrongLogin).contains(
      ERROR_MESSAGE_VALUES.loginWithoutData
    );
  }
  checkIfAllMyAccountSectionsAreVisible() {
    cy.get(myAccountDashboardSection).should("be.visible");
    cy.get(myAccountOrdersSection).should("be.visible");
    cy.get(myAccountDownloadsSection).should("be.visible");
    cy.get(myAccountAddressesSection).should("be.visible");
    cy.get(myAccountSection).should("be.visible");
    cy.get(logoutSection).should("be.visible");
  }

  visitPage() {
    const urls = new Urls();
    urls.visitMyAccountPage();
  }
}

export default AccountPage;

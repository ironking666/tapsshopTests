import Urls from "./urls";
import { ERROR_MESSAGE_VALUES } from "../support/values";
const userInput = "#username";
const passwordInput = "#password";
const loginButton = 'button[name="login"]';
const myAccountNavigation = ".woocommerce-MyAccount-navigation";
const errorAfterWrongLogin = 'ul[role="alert"]';
const passwordRecoveryLink =
  'a[href="https://tapsshop.pl/?page_id=9&lost-password"]';
class AccountPage {
  fillUsernameField(email) {
    cy.get(userInput).type(email);
  }

  fillUserPasswordField(password) {
    cy.get(passwordInput).type(password);
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

  visitPage() {
    const urls = new Urls();
    urls.visitMyAccountPage();
  }
}

export default AccountPage;

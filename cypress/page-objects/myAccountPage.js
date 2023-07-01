import Urls from "./urls";
const userInput = "#username";
const passwordInput = "#password";
const loginButton = 'button[name="login"]';
const myAccountNavigation = ".woocommerce-MyAccount-navigation";
const errorAfterWrongLogin = 'ul[role="alert"]';

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

  checkVisibilityOfMyAccountNavigation() {
    cy.get(myAccountNavigation).should("be.visible");
  }

  checkVisibilityOfErrorAfterWrongLogin() {
    cy.get(errorAfterWrongLogin).should("be.visible");
  }

  visitPage() {
    const urls = new Urls();
    urls.visitMyAccountPage();
  }
}

export default AccountPage;
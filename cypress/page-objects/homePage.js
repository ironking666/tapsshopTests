import Urls from "./urls";

const myAccountHeaderButton = "#menu-item-100";


class HomePage {
  clickMyAccountHeaderButton() {
    cy.get(myAccountHeaderButton).click();
  }

  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }
}

export default HomePage;

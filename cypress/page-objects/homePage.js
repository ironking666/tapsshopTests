import Urls from "./urls";

const myAccountHeaderButton = "#menu-item-100";
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]';
const checkCartFromProductLevel = ".added_to_cart.wc-forward";

class HomePage {
  clickMyAccountHeaderButton() {
    cy.get(myAccountHeaderButton).click();
  }

  addProductToCart() {
    cy.get(dataBlockNameNew).within(() => {
      cy.fixture("products").then((data) => {
        cy.get(data.HoodieWithZipper.Locator).click();
      });
    });
  }
  addSunglassesProductToCart() {
    cy.get(dataBlockNameNew).within(() => {
      cy.fixture("products").then((data) => {
        cy.get(data.Sunglasses.Locator).click();
      });
    });
  }
  clickGoToCartFromProductButton() {
    cy.get(dataBlockNameNew).within(() => {
      cy.get(checkCartFromProductLevel).click();
    });
  }

  visitPage() {
    const url = new Urls();
    url.visitHomePage();
  }
}

export default HomePage;

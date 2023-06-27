import { Product } from "./homePage";

const productName = ".product-name";
const removeItemButton = ".remove";
const emptyCartInfo = ".cart-empty.woocommerce-info";
const goToPaymentsButton =
  ".checkout-button.button.alt.wc-forward.wp-element-button";

class CartPage {
  checkThatAddedProductIsInCart() {
    cy.fixture("products").then((data) => {
      cy.get(productName).contains(data.HoodieWithZipper.Name).should("exist");
    });
  }

  removeItemFromCart() {
    cy.get(removeItemButton).click();
  }
  checkThatCartIsEmpty() {
    cy.get(emptyCartInfo).should("exist");
  }
  clickGoToPaymentsButton() {
    cy.get(goToPaymentsButton).click();
  }
}
export default CartPage;

import { Product } from "./homePage";

const productName = ".product-name";
const removeItemButton = ".remove";
const emptyCartInfo = ".cart-empty.woocommerce-info";

class CartPage {
  checkThatAddedProductIsInCart() {
    cy.get(productName).contains(Product.HoodieWithZipper.Name).should("exist");
  }
  removeItemFromCart() {
    cy.get(removeItemButton).click();
  }
  checkThatCartIsEmpty() {
    cy.get(emptyCartInfo).should("exist");
  }
}
export default CartPage;

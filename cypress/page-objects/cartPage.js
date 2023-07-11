import { Product } from "./homePage";
import { COUPON_CODES } from "../support/values";

const productName = ".product-name";
const removeItemButton = ".remove";
const emptyCartInfo = ".cart-empty.woocommerce-info";
const goToPaymentsButton =
  ".checkout-button.button.alt.wc-forward.wp-element-button";
const quantityInCart = ".input-text.qty";
const updateCartButton = "button[name='update_cart']";
const couponCodeInput = "input[name='coupon_code']";
const applyCouponButton = "button[name='apply_coupon']";

class CartPage {
  checkThatAddedProductIsInCart() {
    cy.fixture("products").then((data) => {
      cy.get(productName).contains(data.HoodieWithZipper.Name).should("exist");
    });
  }
  checkThatAddedProductsAreInCart() {
    cy.fixture("products").then((data) => {
      cy.get(productName).contains(data.HoodieWithZipper.Name).should("exist");
      cy.get(productName).contains(data.Sunglasses.Name).should("exist");
    });
  }
  checkNumberOfProductsInCart() {
    cy.get(quantityInCart).should("have.value", 3);
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
  changeQuantityInCart() {
    cy.get(quantityInCart).clear().type(3);
    cy.get(updateCartButton).click();
  }
  enterCouponCodeValue() {
    cy.get(couponCodeInput).clear().type(COUPON_CODES.firstCoupon);
  }
  clickApplyCouponCodeButton() {
    cy.get(applyCouponButton).click();
  }
  checkIfCouponCodeInputHasBeenFilled() {
    cy.get(couponCodeInput).should("have.value", COUPON_CODES.firstCoupon);
  }
  checkVisibilityOfCouponCodeAlert() {
    cy.on("window:alert", (text) => {
      expect(text).to.equal(
        "Kupon + " + COUPON_CODES.firstCoupon + " + nie istnieje"
      );
    });
  }
}
export default CartPage;

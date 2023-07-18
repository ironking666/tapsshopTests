import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import { beforeEach } from "mocha";

describe("cart page tests", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  beforeEach(() => {
    homePage.visitPage();
    homePage.addProductToCart();
  });

  it("should add product to cart", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
  });

  it("should remove product from cart", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.removeItemFromCart();
    cartPage.checkThatCartIsEmpty();
  });
  it("should add two different products to cart", function () {
    cy.wait(1000);
    homePage.visitPage();
    homePage.addSunglassesProductToCart();
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductsAreInCart();
  });
  it("should change quantity in cart", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.changeQuantityInCart();
    cartPage.checkNumberOfProductsInCart();
  });
  it("should check if user can fill coupon code input", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.enterCouponCodeValue();
    cartPage.checkIfCouponCodeInputHasBeenFilled();
  });
  it("should check if the use of the coupon code is blocked", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.enterCouponCodeValue();
    cartPage.clickApplyCouponCodeButton();
    cartPage.checkVisibilityOfCouponCodeAlert();
  });
  it("should check if price in cart is correct", function () {
    homePage.clickGoToCartFromProductButton();
    cartPage.checkIfPriceInCartIsCorrect();
  });
});

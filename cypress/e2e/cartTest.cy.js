import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import { faker } from "@faker-js/faker";
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
});

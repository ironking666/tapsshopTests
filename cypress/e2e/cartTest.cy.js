import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import { faker } from "@faker-js/faker";

describe("cart page tests", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  it("should add product to cart and delete it from there", function () {
    homePage.visitPage();
    homePage.addProductToCart();
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
    cartPage.removeItemFromCart();
    cartPage.checkThatCartIsEmpty();
  });
});

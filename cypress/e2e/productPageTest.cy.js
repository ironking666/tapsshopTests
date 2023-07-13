import HomePage from "../page-objects/homePage";
import ProductPage from "../page-objects/productPage";
import { beforeEach } from "mocha";

describe("product page tests", () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();
  beforeEach(() => {
    homePage.visitPage();
  });

  it("should click on product and navigate to product view", function () {
    productPage.navigateToProductView();
  });
});

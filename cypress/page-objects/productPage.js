const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]';
const descriptionTab = "#tab-title-description";
const additionalInfoTab = "#tab-title-additional_information";
const reviewsTab = "#tab-title-reviews";
const skuInformation = ".sku_wrapper";
const categoryInformation = ".posted_in";
const productNameInformation = ".product_title";
const addToCartButton = 'button[name="add-to-cart"]';
const quantityInput = 'input[name="quantity"]';
const priceField = "bdi";
const productPhoto =
  'a[href="https://tapsshop.pl/wp-content/uploads/2020/09/polo-2.jpg"]';

class ProductPage {
  navigateToProductView() {
    cy.get(dataBlockNameNew).within(() => {
      cy.fixture("products").then((data) => {
        cy.get(data.Polo.Locator).click();
      });
    });
  }
  checkIfAllProductInformationsAreVisibleOnProductPage() {
    cy.get(descriptionTab).should("be.visible");
    cy.get(additionalInfoTab).should("be.visible");
    cy.get(reviewsTab).should("be.visible");
    cy.get(skuInformation).should("be.visible");
    cy.get(categoryInformation).should("be.visible");
    cy.get(productNameInformation).should("be.visible");
    cy.get(addToCartButton).should("be.visible");
    cy.get(quantityInput).should("be.visible");
    cy.get(priceField).should("be.visible");
    cy.get(productPhoto).should("be.visible");
  }
}

export default ProductPage;

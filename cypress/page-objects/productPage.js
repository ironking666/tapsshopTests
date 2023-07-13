const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]';

class ProductPage {
  navigateToProductView() {
    cy.get(dataBlockNameNew).within(() => {
      cy.fixture("products").then((data) => {
        cy.get(data.Polo.Locator).click();
      });
    });
  }
}

export default ProductPage;

import { faker } from "@faker-js/faker";
const firstName = "#billing_first_name";
const lastName = "#billing_last_name";
const countryDropdown = "#billing_country";
const addressField = "#billing_address_1";
const postalCodeField = "#billing_postcode";
const cityField = "#billing_city";
const phoneNumberField = "#billing_phone";
const emailField = "#billing_email";
const finishOrderButton = "#place_order";
const countryDropdownPoland = "Polska";
const blockWithOrderDetails =
  ".woocommerce-order-overview.woocommerce-thankyou-order-details.order_details";

class OrderPage {
  fillAllRequiredFields() {
    cy.get(firstName).type(faker.name.firstName());
    cy.get(lastName).type(faker.name.lastName());
    cy.get(countryDropdown).select(countryDropdownPoland, { force: true });
    cy.get(addressField).type(faker.address.streetAddress());
    cy.get(postalCodeField).type(faker.address.zipCode("##-###"));
    cy.get(cityField).type(faker.address.city());
    cy.get(phoneNumberField).type(faker.phone.number("+48#########"));
    cy.get(emailField).type(faker.internet.email());
  }

  clickOrderFinishButton() {
    cy.get(finishOrderButton).click();
  }
  checkOrderFinish() {
    cy.get(blockWithOrderDetails, { timeout: 20000 }).should("exist");
  }
}

export default OrderPage;

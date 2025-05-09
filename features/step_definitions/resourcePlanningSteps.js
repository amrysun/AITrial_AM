import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = Cypress.env('intranetUrl');

Given("I open the intranet dashboard", () => {
  cy.visit(baseUrl + "/intranet/dashboard");
});

When("I click on the username to log in", () => {
  cy.contains("username@rysun.com").click();
});

When("I navigate to Project Operations > Resource Planning", () => {
  cy.contains("Menu").click();
  cy.contains("Project operations").click();
  cy.contains("Resource Planning").click();
});

When("I set the allocation date filter from {string} to {string}", (fromDate, toDate) => {
  cy.get('[data-testid="from-allocation-date"]').clear().type(fromDate);
  cy.get('[data-testid="to-allocation-date"]').clear().type(toDate);
});

When("I click on the search button", () => {
  cy.contains("Search").click();
});

Then("I should see the filtered resource list", () => {
  cy.get('[data-testid="resource-list"]').should("exist").and("not.be.empty");
});

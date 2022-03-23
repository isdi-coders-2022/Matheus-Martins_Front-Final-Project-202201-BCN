// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", function () {
  beforeEach(function () {
    cy.visit("users/login");
  });

  it("renders the app should find h1 with login", function () {
    cy.get("h1").should("contain", "Login");
  });

  it("should find the first input and type matheusvmm", function () {
    cy.get("input")
      .first()
      .type("matheusvmm")
      .should("have.value", "matheusvmm");
    cy.get("input").last().type("123456mat").should("have.value", "123456mat");
    cy.get("button").click();
  });
});

export {};

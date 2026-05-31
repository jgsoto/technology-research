describe("Router Test", () => {
  it("should navigate between pages", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Users").click();

    cy.url().should("include", "/users");

    cy.contains("Counter").click();

    cy.url().should("include", "/counter");
  });
});
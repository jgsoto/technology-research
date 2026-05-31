describe("Navigation Test", () => {
  it("should navigate to users page", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Users").click();

    cy.url().should("include", "/users");
  });
});
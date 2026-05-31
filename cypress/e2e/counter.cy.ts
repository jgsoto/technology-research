describe('Counter Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/counter');
  });

  it('should render initial counter value', () => {
    cy.get('[data-cy="counter-value"]')
      .should('contain', '0');
  });

  it('should increment counter', () => {
    cy.get('[data-cy="increment-btn"]')
      .click();

    cy.get('[data-cy="counter-value"]')
      .should('contain', '1');
  });

  it('should decrement counter', () => {
    cy.get('[data-cy="decrement-btn"]')
      .click();

    cy.get('[data-cy="counter-value"]')
      .should('contain', '-1');
  });

  it('should increment multiple times', () => {
    cy.get('[data-cy="increment-btn"]').click();
    cy.get('[data-cy="increment-btn"]').click();
    cy.get('[data-cy="increment-btn"]').click();

    cy.get('[data-cy="counter-value"]')
      .should('contain', '3');
  });

  it('should handle increment and decrement together', () => {
    cy.get('[data-cy="increment-btn"]').click();
    cy.get('[data-cy="increment-btn"]').click();
    cy.get('[data-cy="decrement-btn"]').click();

    cy.get('[data-cy="counter-value"]')
      .should('contain', '1');
  });

});
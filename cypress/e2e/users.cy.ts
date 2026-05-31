describe("Users Page", () => {

    beforeEach(() => {
        cy.visit("http://localhost:5173/users");
    });

    it("should load users successfully", () => {

        cy.contains("Users Page");

        cy.get('[data-cy="user-card"]')
            .should("have.length.greaterThan", 0);

    });

    it("should display search input", () => {

        cy.get('[data-cy="search-input"]')
            .should("exist")
            .and("be.visible");

    });

    it("should filter users by name", () => {

        cy.get('[data-cy="search-input"]')
            .type("Leanne");

        cy.contains("Leanne Graham");

    });

    it("should reduce results after filtering", () => {

        cy.get('[data-cy="user-card"]')
            .then(($cards) => {

                const initialCount = $cards.length;

                cy.get('[data-cy="search-input"]')
                    .type("Leanne");

                cy.get('[data-cy="user-card"]')
                    .should("have.length.lessThan", initialCount);

            });

    });

    it("should clear search and restore users", () => {

        cy.get('[data-cy="search-input"]')
            .type("Leanne");

        cy.get('[data-cy="search-input"]')
            .clear();

        cy.get('[data-cy="user-card"]')
            .should("have.length", 10);

    });

    it("should handle non existing user", () => {

        cy.get('[data-cy="search-input"]')
            .type("xxxxxxxxxxxxx");

        cy.get('[data-cy="user-card"]')
            .should("have.length", 0);

    });

});
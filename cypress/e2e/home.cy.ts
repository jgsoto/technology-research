describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('should render homepage title', () => {
        cy.get('[data-cy="home-title"]')
            .should('be.visible')
            .and('contain', 'Homepage');
    });

    it('should show loaded message from useEffect', () => {
        cy.get('[data-cy="loaded-message"]')
            .should('be.visible')
            .and('contain', 'Component Loaded');
    });

    it('should start counter at zero', () => {
        cy.get('[data-cy="count-text"]')
            .should('contain', 'Count: 0');
    });

    it('should increment counter once', () => {
        cy.get('[data-cy="increment-btn"]').click();

        cy.get('[data-cy="count-text"]')
            .should('contain', 'Count: 1');
    });

    it('should increment counter multiple times', () => {
        cy.get('[data-cy="increment-btn"]').click();
        cy.get('[data-cy="increment-btn"]').click();
        cy.get('[data-cy="increment-btn"]').click();

        cy.get('[data-cy="count-text"]')
            .should('contain', 'Count: 3');
    });

    it('should display measured width from useLayoutEffect', () => {
        cy.get('[data-cy="width-text"]')
            .invoke('text')
            .then((text) => {
                expect(text).to.match(/Width:\s\d+px/);
            });
    });

    it('should render home container', () => {
        cy.get('[data-cy="home-container"]')
            .should('exist')
            .and('be.visible');
    });
});
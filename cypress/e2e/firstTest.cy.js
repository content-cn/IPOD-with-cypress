describe('iPod Menu', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the main menu options', () => {
    cy.get('#side-menu').contains('Settings');
    cy.get('#side-menu').contains('Games');
    cy.get('#side-menu').contains('Music');
    cy.get('#side-menu').contains('Coverflow');
  });

  it('should navigate inside the selected menu option on center button click', () => {
    cy.get('#ok-button').click();
    cy.get('#coverflow').should('exist');
  });

  it('should navigate back to the main menu on "Menu" button click', () => {
    cy.get('#ok-button').click();
    cy.get('#menu-button').click();
    cy.get('#side-menu').should('be.visible');
  });

  it('should navigate using circular motion inside the menu', () => {
    cy.get('[data-option]').invoke('removeClass', 'active');
    cy.get('[data-option="music"]').invoke('addClass', 'active');
    cy.get('#ok-button').click();
    cy.get('#music-menu').should('be.visible');
    cy.get('#menu-button').click();
    cy.get('#side-menu').should('be.visible');
  });

});

/// <reference types="cypress" />
describe('Integration Test sample', () => {
  it('Load sample page', () => {
    cy.visit('/');

    cy.contains('Vue Template');
  });
});

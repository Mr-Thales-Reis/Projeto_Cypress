describe('Testar página local', () => {
  it('Deve carregar a experiência', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get(':nth-child(1) > a').click();
    cy.get('a').click();

  });
});
describe('Página de Login cenário correto', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="login-button"]').click();
    })
    
  it('Deve preencher os campos de login para autenticar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})
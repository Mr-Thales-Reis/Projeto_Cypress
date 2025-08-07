describe('Página de Login cenário correto', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="login-button"]').click();
    })
    
  it('Deve preencher os campos de login para autenticar o usuário na página', () => {
    cy.login('ana@email.com', 'Senha123')
    
  })
})
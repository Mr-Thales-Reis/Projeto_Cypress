describe('Página de cadastro', () => {
  it('Deve preencher incorretamente os campos de texto para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', "Cadastrar").click();

    cy.get('[data-test="submit-button"]').click();

    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})
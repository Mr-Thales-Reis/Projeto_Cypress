describe('Página de cadastro', () => {
  it('Deve preencher corretamente os campos de texto para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', "Cadastrar").click();
    cy.get('[data-test="input-name"]').type(nomeAleatorio);
    cy.get('[data-test="input-email"]').type(emailAleatorio);
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})

const randomString = Math.random().toString(36).substring(2, 10);
const nomeAleatorio = `Usuário ${randomString}`;
const emailAleatorio = `usuario_${randomString}@email.com`;
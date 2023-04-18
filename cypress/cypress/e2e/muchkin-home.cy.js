/// <reference types='Cypress' />

describe('Munchkin | Helper', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/munchkin/'))
  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Munchkin | Helper');
  });

  it('verifica o titulo h1 que está na tela', () => {
    cy.get('#cy-title')
      .should('be.visible')
      .contains('#cy-title', 'Munchkin | Helper');
  })

  it('clica no botão novo jogo', () => {
    cy.get('#cy-new_game')
      .should('be.visible')
      .contains('#cy-new_game', 'Novo Jogo')
      .should('be.enabled')
      .click();
  });

  it('não consegue clicar no botão continuar', () => {
    cy.get('#cy-continue')
      .should('be.visible')
      .contains('#cy-continue', 'Continuar')
      .should('be.disabled');
  })
})
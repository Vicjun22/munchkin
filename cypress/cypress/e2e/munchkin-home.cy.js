/// <reference types='Cypress' />

describe('Munchkin | Helper', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/munchkin/'))
  
  it('deve verificar o título da aplicação', () => {
    cy.title().should('be.equal', 'Munchkin | Helper');
  });

  it('deve verificar se o título da aplicação está na tela', () => {
    cy.get('#cy-title > :nth-child(1)').contains('Munchkin');
    cy.get('#cy-title > :nth-child(3)').contains('Helper');
  });

  it('deve clicar no botão de continuar corretamente', () => {
    const MUNCHKIN = 'munchkin';
    const gameStorage = localStorage.getItem(MUNCHKIN) || false;
    const isJogoIniciado = gameStorage ? gameStorage.some((player) => player.iniciouJogo) : false;

    if (!gameStorage || !isJogoIniciado) {
      cy.get('#cy_home-btn_continuar').contains('Continuar').should('be.disabled');
    } else {
      cy.get('#cy_home-btn_continuar').contains('Continuar').should('be.enabled').click();
    }
  });

  it('deve clicar no botão de novo jogo', () => {
    cy.get('#cy_home-btn_novo-jogo').contains('Novo Jogo').click();
  });

  it('deve clicar no botão de regras', () => {
    cy.get('#cy_home-btn_regras').contains('Regras').click();
  });

  it('deve entrar na tela de criação de 1 ficha corretamente', () => {
    cy.get('#cy_home-btn_novo-jogo').contains('Novo Jogo').click();
    cy.get('#cy_home-btn_um-jogador').contains('1 Ficha').click();
    cy.get('#cy-title > :nth-child(1)').contains('Munchkin');
    cy.get('#cy-title > :nth-child(3)').contains('Helper');
  });

  it('deve entrar na tela de criação de 3-6 fichas corretamente', () => {
    cy.get('#cy_home-btn_novo-jogo').contains('Novo Jogo').click();
    cy.get('#cy_home-btn_varios-jogadores').contains('3-6 Fichas').click();
    cy.get('#cy-title > :nth-child(1)').contains('Munchkin');
    cy.get('#cy-title > :nth-child(3)').contains('Helper');
  });

  it('deve avançar a tela e voltar para o menu principal corretamente', () => {
    cy.get('#cy_home-btn_novo-jogo').contains('Novo Jogo').click();
    cy.get('#cy_home-btn_voltar').contains('Voltar').click();
  });
})
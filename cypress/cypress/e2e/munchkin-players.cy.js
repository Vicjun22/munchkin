/// <reference types='Cypress' />

describe('Munchkin | Helper', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/munchkin/gameHelper/Cards/'))
  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Munchkin | Helper')
  });

  it('deve cadastrar 1 jogador corretamente', () => {
    localStorage.setItem('munchkin_qtd_players', 'um-jogador');
    cy.get('#cy_create-players-btn_adicionar').should('be.disabled');
    cy.get('#cy_create-card-input_nome').should('be.visible').type('Victor Elias').should('have.value', 'Victor Elias');
    cy.get('#cy_create-players-btn_adicionar').should('be.disabled');
    cy.get('#cy_create-card-img_m').click();
    cy.get('#cy_create-players-btn_adicionar').should('be.enabled').click();
  });

  it('deve cadastrar 6 jogadores corretamente', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadores');
    cy.addSixPlayers()
  });

  it('deve sair corretamente da tela de criação de 1 ficha', () => {
    localStorage.setItem('munchkin_qtd_players', 'um-jogador');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.modal_content > div > :nth-child(2)').contains('Sim').click();
  });

  it('deve sair corretamente da tela de criação de 3-6 fichas', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadors');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.modal_content > div > :nth-child(2)').contains('Sim').click();
  });

  it('deve desistir de sair da tela de criação de 1 ficha', () => {
    localStorage.setItem('munchkin_qtd_players', 'um-jogador');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.modal_content > div > :nth-child(1)').contains('Não').click();
  });

  it('deve desistir de sair da tela de criação de 1 ficha clicando no ícone "X"', () => {
    localStorage.setItem('munchkin_qtd_players', 'um-jogador');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.exit-modal_btn-cross').click();
  });

  it('deve desistir de sair da tela de criação de 3-6 fichas', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadores');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.modal_content > div > :nth-child(1)').contains('Não').click();
  });

  it('deve desistir de sair da tela de criação de 3-6 fichas clicando no ícone "X"', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadores');
    cy.get('#cy_create-players-btn_sair').contains('Sair').click();
    cy.get('.exit-modal_btn-cross').click();
  });

  it('deve mudar a ordem dos jogadores aleatóriamente quando pressionado o botão de mudar ordem', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadores');
    cy.addSixPlayers()
    cy.get('#cy_create-players-btn_sortear-ordem').contains('Mudar Ordem').click();
    cy.get('#cy_card_nome_0').should('not.contain', 'Victor') 
      && cy.get('#cy_card_nome_1').should('not.contain', 'Karol');
  });

  it('deve iniciar o jogo no modo 3-6 fichas', () => {
    localStorage.setItem('munchkin_qtd_players', 'varios-jogadores');
    cy.addSixPlayers()
    cy.get('#cy_create-players-btn_jogar').contains('Jogar').click();
  });

  it('deve iniciar o jogo no modo 1 ficha', () => {
    localStorage.setItem('munchkin_qtd_players', 'um-jogador');
    cy.get('#cy_create-card-input_nome').type('Victor Elias').should('have.value', 'Victor Elias');
    cy.get('#cy_create-card-img_m').click();
    cy.get('#cy_create-players-btn_adicionar').contains('Criar Card').click();
    cy.get('#cy_create-players-btn_jogar').contains('Jogar').click();
  });
});
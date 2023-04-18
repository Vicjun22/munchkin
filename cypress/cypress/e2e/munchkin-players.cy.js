/// <reference types='Cypress' />

describe('Munchkin | Helper', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/munchkin/players/CARDS/'))
  
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Munchkin | Helper')
  });

  it('cadastra 6 jogadores', () => {
    cy.putSixPlayersInTheGame()
  });

  it('cadastra 6 jogadores e bloqueia botão de adicionar', () => {
    cy.putSixPlayersInTheGame()
    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.disabled');
  })

  it('botão de jogar está bloqueado enquanto não tiver jogadores o suficiente', () => {
    cy.get('#cy-play')
      .should('be.visible')
      .contains('#cy-play', 'Jogar')
      .should('be.disabled');
  })

  it('botão de jogar está bloqueado enquanto não tiver mais 1 jogador', () => {
    cy.get('#cy-name_input')
      .should('be.visible')
      .type('Victor Elias Ross Júnior')
      .should('have.value', 'Victor Elias Ross Júnior');

    cy.get('#cy-gender_button-m')
      .should('be.visible')
      .click();

    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.enabled')
      .click();

    cy.get('#cy-play')
      .should('be.visible')
      .contains('#cy-play', 'Jogar')
      .should('be.disabled');

    cy.get('#cy-name_input')
      .should('be.visible')
      .type('Karoline Lemes Vaz')
      .should('have.value', 'Karoline Lemes Vaz');
  
    cy.get('#cy-gender_button-f')
      .should('be.visible')
      .click();

    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.enabled')
      .click();

    cy.get('#cy-play')
      .should('be.visible')
      .contains('#cy-play', 'Jogar')
      .should('be.enabled')
      .click();
  });

  it('deve definir jogadores aleatóriamente', () => {
    cy.putSixPlayersInTheGame()

    cy.get('#cy-random')
      .should('be.visible')
      .contains('#cy-random', 'Trocar Ordem')
      .click()
  });

  it('botão de trocar ordem está bloqueado enquanto não tiver mais 1 jogador', () => {
    cy.get('#cy-name_input')
      .should('be.visible')
      .type('Victor Elias Ross Júnior')
      .should('have.value', 'Victor Elias Ross Júnior');

    cy.get('#cy-gender_button-m')
      .should('be.visible')
      .click();

    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.enabled')
      .click();

    cy.get('#cy-random')
      .should('be.visible')
      .contains('#cy-random', 'Trocar Ordem')
      .should('be.disabled');

    cy.get('#cy-name_input')
      .should('be.visible')
      .type('Karoline Lemes Vaz')
      .should('have.value', 'Karoline Lemes Vaz');
  
    cy.get('#cy-gender_button-f')
      .should('be.visible')
      .click();

    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.enabled')
      .click();

    cy.get('#cy-random')
      .should('be.visible')
      .contains('#cy-random', 'Trocar Ordem')
      .should('be.enabled')
      .click();
  })

  it('ao clicar em sair, deve voltar à tela inicial', () => {
    cy.get('#cy-exit')
      .should('be.visible')
      .contains('#cy-exit', 'Sair')
      .should('be.enabled')
      .click();

    cy.contains('#cy-new_game', 'Novo Jogo');
    cy.contains('#cy-continue', 'Continuar');
  })
});
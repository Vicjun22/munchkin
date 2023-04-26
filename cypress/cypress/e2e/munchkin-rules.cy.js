/// <reference types='Cypress' />

describe('Munchkin | Helper', () => {
  beforeEach(() => cy.visit('http://127.0.0.1:5173/munchkin/gameHelper/rules/'))

  it('deve verificar o título da aplicação', () => {
    cy.title().should('be.equal', 'Munchkin | Helper');
  });

  it('deve conter o conteúdo das regras quando o botão regras for clicado', () => {
    cy.get('.regras_titulos-selecionado').contains('REGRAS').click();
    cy.get('.rules_content-title').contains('REGRAS');
  });

  it('deve conter o conteúdo das regras quando o botão preparação for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(2)').contains('PREPARAÇÃO').click();
    cy.get('.rules_content-title').contains('PREPARAÇÃO');
  });

  it('deve conter o conteúdo das regras quando o botão distribuição das cartas for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(3)').contains('DISTRIBUIÇÃO DAS CARTAS').click();
    cy.get('.rules_content-title').contains('DISTRIBUIÇÃO DAS CARTAS');
  });

  it('deve conter o conteúdo das regras quando o botão criação de personagens for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(4)').contains('CRIAÇÃO DE PERSONAGENS').click();
    cy.get('.rules_content-title').contains('CRIAÇÃO DE PERSONAGENS');
  });

  it('deve conter o conteúdo das regras quando o botão início e término do jogo for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(5)').contains('INÍCIO E TÉRMINO DO JOGO').click();
    cy.get('.rules_content-title').contains('INÍCIO E TÉRMINO DO JOGO');
  });

  it('deve conter o conteúdo das regras quando o botão as fases do turno for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(6)').contains('AS FASES DO TURNO').click();
    cy.get('.rules_content-title').contains('AS FASES DO TURNO');
  });

  it('deve conter o conteúdo das regras quando o botão combate for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(7)').contains('COMBATE').click();
    cy.get('.rules_content-title').contains('COMBATE');
  });

  it('deve conter o conteúdo das regras quando o botão características dos personagens for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(8)').contains('CARACTERÍSTICAS DOS PERSONAGENS').click();
    cy.get('.rules_content-title').contains('CARACTERÍSTICAS DOS PERSONAGENS');
  });

  it('deve conter o conteúdo das regras quando o botão itens for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(9)').contains('ITENS').click();
    cy.get('.rules_content-title').contains('ITENS');
  });

  it('deve conter o conteúdo das regras quando o botão quando jogar as cartas for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(10)').contains('QUANDO JOGAR AS CARTAS').click();
    cy.get('.rules_content-title').contains('QUANDO JOGAR AS CARTAS');
  });

  it('deve conter o conteúdo das regras quando o botão outras coisas do munchkin for clicado', () => {
    cy.get('.regras_titulos_container > :nth-child(11)').contains('OUTRAS COISAS DO MUNCHKIN').click();
    cy.get('.rules_content-title').contains('OUTRAS COISAS DO MUNCHKIN');
  });

  it('deve voltar ao menu principal corretamente', () => {
    cy.get('#cy_rules-btn_voltar').contains('Voltar').click();
    cy.get('#cy-title > :nth-child(1)').contains('Munchkin');
    cy.get('#cy-title > :nth-child(3)').contains('Helper');
  })
})
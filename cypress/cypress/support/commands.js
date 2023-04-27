Cypress.Commands.add('addSixPlayers', () => {
    cy.get('#cy_create-card-input_nome').type('Victor').should('have.value', 'Victor');
    cy.get('#cy_create-card-img_m').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.disabled');
    cy.get('#cy_create-players-btn_jogar').should('be.disabled');

    cy.get('#cy_create-card-input_nome').type('Karol').should('have.value', 'Karol');
    cy.get('#cy_create-card-img_f').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.disabled');
    cy.get('#cy_create-players-btn_jogar').should('be.disabled');

    cy.get('#cy_create-card-input_nome').type('Fulano').should('have.value', 'Fulano');
    cy.get('#cy_create-card-img_m').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.enabled');
    cy.get('#cy_create-players-btn_jogar').should('be.enabled');

    cy.get('#cy_create-card-input_nome').type('Fulana').should('have.value', 'Fulana');
    cy.get('#cy_create-card-img_f').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.enabled');
    cy.get('#cy_create-players-btn_jogar').should('be.enabled');

    cy.get('#cy_create-card-input_nome').type('João').should('have.value', 'João');
    cy.get('#cy_create-card-img_m').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.enabled');
    cy.get('#cy_create-players-btn_jogar').should('be.enabled');

    cy.get('#cy_create-card-input_nome').type('Maria').should('have.value', 'Maria');
    cy.get('#cy_create-card-img_f').should('be.visible').click();
    cy.get('#cy_create-players-btn_adicionar')
        .contains('#cy_create-players-btn_adicionar', 'Adicionar')
        .should('be.enabled').click();
    cy.get('#cy_create-players-btn_sortear-ordem').should('be.enabled');
    cy.get('#cy_create-players-btn_jogar').should('be.enabled');

    cy.get('#cy_card_nivel_0').should('be.visible').contains('1');
    cy.get('#cy_card_nome_0').should('be.visible').contains('Victor');
    cy.get('#cy_card_raca_0').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_0').should('be.visible').contains('1');

    cy.get('#cy_card_nivel_1').should('be.visible').contains('1');
    cy.get('#cy_card_nome_1').should('be.visible').contains('Karol');
    cy.get('#cy_card_raca_1').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_1').should('be.visible').contains('2');

    cy.get('#cy_card_nivel_2').should('be.visible').contains('1');
    cy.get('#cy_card_nome_2').should('be.visible').contains('Fulano');
    cy.get('#cy_card_raca_2').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_2').should('be.visible').contains('3');

    cy.get('#cy_card_nivel_3').should('be.visible').contains('1');
    cy.get('#cy_card_nome_3').should('be.visible').contains('Fulana');
    cy.get('#cy_card_raca_3').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_3').should('be.visible').contains('4');

    cy.get('#cy_card_nivel_4').should('be.visible').contains('1');
    cy.get('#cy_card_nome_4').should('be.visible').contains('João');
    cy.get('#cy_card_raca_4').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_4').should('be.visible').contains('5');

    cy.get('#cy_card_nivel_5').should('be.visible').contains('1');
    cy.get('#cy_card_nome_5').should('be.visible').contains('Maria');
    cy.get('#cy_card_raca_5').should('be.visible').contains('Humano');
    cy.get('#cy_card_ordem_5').should('be.visible').contains('6');
})
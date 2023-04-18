Cypress.Commands.add('putSixPlayersInTheGame', () => {
    cy.get('#cy-name_input')
        .should('be.visible')
        .type('Érico Luis de Oliveira do Couto')
        .should('have.value', 'Érico Luis de Oliveira do Couto');

    cy.get('#cy-gender_button-m')
        .should('be.visible')
        .click();

    cy.get('#cy-add')
        .should('be.visible')
        .contains('#cy-add', 'Adicionar')
        .should('be.enabled')
        .click();

    // first player created

    cy.get('#cy-name_input')
        .should('be.visible')
        .type('José Felipe Moré Pauletti')
        .should('have.value', 'José Felipe Moré Pauletti');

    cy.get('#cy-gender_button-m')
        .should('be.visible')
        .click();

    cy.get('#cy-add')
        .should('be.visible')
        .contains('#cy-add', 'Adicionar')
        .should('be.enabled')
        .click();

    // second player created

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

    // third player created

    cy.get('#cy-name_input')
        .should('be.visible')
        .type('Luan Rodrigues')
        .should('have.value', 'Luan Rodrigues');
    
    cy.get('#cy-gender_button-m')
        .should('be.visible')
        .click();

    cy.get('#cy-add')
      .should('be.visible')
      .contains('#cy-add', 'Adicionar')
      .should('be.enabled')
      .click();

    // fourth player created

    cy.get('#cy-name_input')
        .should('be.visible')
        .type('Samuel Almeida')
        .should('have.value', 'Samuel Almeida');

    cy.get('#cy-gender_button-m')
        .should('be.visible')
        .click();

    cy.get('#cy-add')
        .should('be.visible')
        .contains('#cy-add', 'Adicionar')
        .should('be.enabled')
        .click();

    // fifth player created

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

    // sixth player created

    cy.contains('Érico Luis de Oliveira do Couto')
        .should('be.visible');

    cy.contains('José Felipe Moré Pauletti')
        .should('be.visible');

    cy.contains('Karoline Lemes Vaz')
        .should('be.visible');

    cy.contains('Luan Rodrigues')
        .should('be.visible');

    cy.contains('Samuel Almeida')
        .should('be.visible');

    cy.contains('Victor Elias Ross Júnior')
        .should('be.visible');
})
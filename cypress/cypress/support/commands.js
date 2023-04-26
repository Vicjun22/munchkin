Cypress.Commands.add('putSixPlayersInTheGame', () => {
    cy.get('#cy-name_input')
        .should('be.visible')
        .type('Victor')
        .should('have.value', 'Victor');

    cy.get('#cy-gender_button-m')
        .should('be.visible')
        .click();

    cy.get('#cy-add')
        .should('be.visible')
        .contains('#cy-add', 'Adicionar')
        .should('be.enabled')
        .click();

    cy.contains('Victor')
        .should('be.visible');
})
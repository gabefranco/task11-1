/// <reference types="cypress" />

describe('Tarefa do Módulo 11 parte 1', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });

    it('Terceira parte - COMPRAS e FINALIZAR', () => {

        cy.visit('http://lojaebac.ebaconline.art.br/');
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.get('.product-block').eq(2).click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get(':nth-child(6) > .page-numbers').click()
        cy.get('.product-block').last().click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
        cy.get('#primary-menu > .menu-item-629 > a').click()

        cy.get(':nth-child(7) > .page-numbers').click()
        cy.get('.product-block').first().click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', 'no seu carrinho.')
        cy.get('#primary-menu > .menu-item-536 > .dropdown-toggle').click()

        cy.get('#main > :nth-child(1) > strong').should('contain', "#THEBUGSONTHETABLE")
    });
});
/// <reference types="cypress" />

describe('Tarefa do Módulo 11 parte 1', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });

    it('Primeira parte - REGISTRO e PRE CADASTRO no site', () => {

        var name = ('Galvão Bueno')
        var lastname = ('Silva')
        var email = ('galvaobuenosilva@gmail.com')
        var senha = ('galvao@123#')

        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('a > .hidden-xs').should('contain', "Welcome")
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(name)
        cy.get('#account_last_name').type(lastname)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
        cy.get('.products-carousel-thumbnail > .widget-title > span').should('be.visible')
    });
});
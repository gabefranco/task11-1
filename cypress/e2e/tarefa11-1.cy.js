/// <reference types="cypress" />

describe('Tarefa do Módulo 11 parte 1', () => {

    // beforeEach(() => {
    //     cy.visit('http://lojaebac.ebaconline.art.br/');
    // });

    it('Primeira parte será o REGISTRO e PRE CADASTRO no site', () => {

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
    
    it('Segunda parte será o LOGIN no site', () => {

        var email = ('galvaobuenosilva@gmail.com')
        var senha = ('galvao@123#')

        cy.visit('http://lojaebac.ebaconline.art.br/');
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você')
    });

    it('Terceira parte será fazer COMPRAS e FINALIZAR', () => {

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
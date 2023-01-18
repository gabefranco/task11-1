/// <reference types="cypress" />

describe('Tarefa do Módulo 11 parte 1', () => {

    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/');
    });

    it('Segunda parte - LOGIN no site', () => {

        var email = ('galvaobuenosilva@gmail.com')
        var senha = ('galvao@123#')

        cy.visit('http://lojaebac.ebaconline.art.br/');
        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(email)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta, você')
    });
});
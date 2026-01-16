import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given ('que o usuario acessou o site coffee-cart', () => {
    cy.visit('/')
})
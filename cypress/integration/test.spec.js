/// <reference types="cypress" />

const HEADER = 'header';
const BODY = 'body';
const IMG = 'img';
const FOOTER = 'footer';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('./index.html');
  });

  describe('1 - Verificando <header />', () => {
    it('1.1 - verifica se há uma TAG <header />', () => {
      cy.get(HEADER).should('exist');
    });

    it('1.2 - verifica se no <header /> há, pelo menos, 2 elementos filhos', () => {
      cy.get(HEADER).children().should('have.length.at.least', 2);
    });
  });

  describe('2 - Verificando <body />', () => {
    it('2.1 - verifica se há uma TAG <body />', () => {
      cy.get(BODY).should('exist');
    });

    it('2.2 - verifica se há uma TAG <img />', () => {
      cy.get(IMG).should('exist');
    });
  });

  describe('3 - Verificando <footer />', () => {
    it('3.1 - verfica se há uma TAG <footer />', () => {
      cy.get(FOOTER).should('exist');
    });
  });
});

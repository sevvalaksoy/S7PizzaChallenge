beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('SANITY CHECK', () => {
  it('opens the app successfully', () => {
    cy.url().should("contain", 'http://localhost:5173/');
  });
});

describe('SUCCESS', () => {

  it('opens the order page', () => {
    //arrange
    cy.get('[data-cy="acıktım-button"]').as("loginLink");
    //act
    cy.get("@loginLink").click();
    //assert
    cy.url().should("contain", "/order");
  });
});

describe('Input check', () => {

  it('write something on input', () => {
    //arrange
    cy.get('[data-cy="acıktım-button"]').as("loginLink");
    cy.get("@loginLink").click();
    //act
    cy.get('[data-cy="name-input"]').type("Şe");
    //assert
    cy.contains("En az 3 karakter giriniz!").should("be.visible");
  });
});

describe('Ingridients check', () => {

  it('select ingridients', () => {
    //arrange
    cy.get('[data-cy="acıktım-button"]').as("loginLink");
    cy.get("@loginLink").click();
    //act
    cy.get('[data-cy="pep-ing"]').check();
    cy.get('[data-cy="tI-ing"]').check();
    cy.get('[data-cy="sar-ing"]').check();
    //assert
    cy.contains("En az 4 en fazla 10 adet seçiniz!").should("be.visible");
  });
});

describe('submit form', () => {

  it('form sumbits after click', () => {
    //arrange
    cy.get('[data-cy="acıktım-button"]').as("loginLink");
    cy.get("@loginLink").click();
    //act
    cy.get('[data-cy="pep-ing"]').check();
    cy.get('[data-cy="tI-ing"]').check();
    cy.get('[data-cy="sar-ing"]').check();
    cy.get('[data-cy="mıs-ing"]').check();
    cy.get('[data-cy="name-input"]').type("Şevval");
    cy.get('[data-cy="orta-boy"]').check();
    cy.get('[data-cy="select-bar"]').select("Klasik Hamur");
    cy.get('[data-cy="submit-button"]').as("submitLink");
    cy.get("@submitLink").click();
    //assert
    cy.url().should("contain", "/success");
  });
});
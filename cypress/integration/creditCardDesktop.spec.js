describe("Desktop Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.viewport(1800, 1000);
  });

  it("verify Credit card initial state", () => {
    cy.get("#creditCardDate")
      .first("span")
      .should("have.value", "");

    cy.get("#creditCardNumber")
      .first("span")
      .should("have.value", "");

    cy.get("#creditCardName")
      .first("span")
      .should("have.value", "");
  });

  it("writting on credit card field", () => {
    cy.get("input[id=creditCard]").type("9999999999999999");
  });

  it("writting on name field", () => {
    cy.get("input[id=name]").type("Vitor Vieira Benx Developer");
  });

  it("writting on instalments field", () => {
    cy.get(".MuiSelect-root")
      .first()
      .click()
      .get(".MuiButtonBase-root")
      .eq(3)
      .click();
  });

  it("writting on date field", () => {
    cy.get("input[id=date]").type("1020");
  });

  it("writting on cvv field", () => {
    cy.get("input[id=cvv]").type("332");
  });

  it("verify field masks", () => {
    cy.get("input[id=creditCard]").type("9999999999999999");
    cy.get("input[id=name]").type("Vitor Vieira Benx Developer");
    cy.get("input[id=date]").type("1020");
    cy.get("input[id=cvv]").type("332");
    cy.get(".MuiSelect-root")
      .first()
      .click()
      .get(".MuiButtonBase-root")
      .eq(3)
      .click();

    cy.get("input[id=creditCard]").should("have.value", "9999 9999 9999 9999");
    cy.get("input[id=name]").should(
      "have.value",
      "Vitor Vieira Benx Developer"
    );
    cy.get("input[id=date]").should("have.value", "10/20");
    cy.get("input[id=cvv]").should("have.value", "332");

    cy.get(".MuiSelect-select")
      .first()
      .should("have.text", "3 x");
  });

  it("Button click", () => {
    cy.get("input[id=creditCard]").type("9999999999999999");
    cy.get("input[id=name]").type("Vitor Vieira Benx Developer");
    cy.get("input[id=date]").type("1020");
    cy.get("input[id=cvv]").type("332");
    cy.get(".MuiSelect-root")
      .first()
      .click()
      .get(".MuiButtonBase-root")
      .eq(3)
      .click();

    cy.get(".MuiButtonBase-root")
      .first()
      .click();

    cy.get(".MuiCircularProgress-root");
  });

  it("Invalid form button click", () => {
    cy.get(".MuiButtonBase-root")
      .first()
      .click();

    cy.get(".MuiButton-label").should("contain.text", "continuar");

    cy.get("#creditCard-helper-text").should(
      "contain.text",
      "Número do cartão inválido"
    );
    cy.get("#name-helper-text").should("have.text", "Insira seu nome completo");
    cy.get("#date-helper-text").should("have.text", "Data inválida");
    cy.get("#cvv-helper-text").should("have.text", "CVV inválido");
  });
});

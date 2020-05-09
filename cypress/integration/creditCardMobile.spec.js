describe("Mobile Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
    cy.viewport(360, 640);
  });

  it("writting on credit card field", () => {
    cy.get("input[id=creditCard]").type("9999999999999999");
  });

  it("writting on name field", () => {
    cy.get("input[id=name]").type("Vitor Vieira Benx Developer");
  });

  it("writting on date field", () => {
    cy.get("input[id=date]").type("1020");
  });

  it("writting on cvv field", () => {
    cy.get("input[id=cvv]").type("332");
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
});

import { HTTP_URL, userInfo } from "../../constants";
const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Transaction test suite", () => {
  beforeEach(() => {
    //Create test seed data to ensure that the tests will run correctly and independently.
    cy.task("db:seed");
    cy.intercept("POST", apiGraphQL, () => {});

    //Before running the test, log in and navigate to create a bank account.
    cy.intercept("GET", "/signin");
    cy.visit(`${HTTP_URL}/signin`);

    // Login User
    cy.login(userInfo.username, userInfo.password);

    // Visit transaction window
    cy.url().should("eq", `${HTTP_URL}/`);
    cy.visit(`${HTTP_URL}/transaction/new`);
    cy.getBySel("user-list-item-qywYp6hS0U").click();
  });

  /*
    Test Name: CP 95: Transferencia 3.
    Objetive: Test the transfer form with 1 dollar amount and
      a valid note.
    
    Test Data:
    Amount: 1 
    Note: ABC123$ 

    Expected Result: Carry out the transaction, show
        Pay button enabled
  */
  it("CP 95: Test the transfer form with 1 dollar amount and a valid note", function () {
    cy.get("#amount").type("1").blur();
    cy.get("#transaction-create-description-input").type("ABC123$ ").blur();

    cy.getBySel("transaction-create-submit-payment").should("be.enabled");
    cy.visualSnapshot("Transaction Pay Enabled");
  });

  /*
    Test Name: CP 96: Transferencia 4.
    Objetive: Test the transfer form with 1 dollar amount and
        without note.
    
    Test Data:
    Amount: 1
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a note" helper texts
  */
  it("CP 96: Test the transfer form with 1 dollar amount and without note", function () {
    cy.get("#amount").type("1").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 97: Transferencia 5.
    Objetive: Test the transfer form with 2 dollars amount and
        a valid note.
    
    Test Data:
    Amount: 2
    Note: ABC123$

    Expected Result: Carry out the transaction, show
        Pay button enabled
  */
  it("CP 97: Test the transfer form with 2 dollars amount and a valid note", function () {
    cy.get("#amount").type("2").blur();
    cy.get("#transaction-create-description-input").type("ABC123$").blur();

    cy.getBySel("transaction-create-submit-payment").should("be.enabled");
    cy.visualSnapshot("Transaction Pay Enabled");
  });

  /*
    Test Name: CP 98: Transferencia 6.
    Objetive: Test the transfer form with 2 dollars amount and
        without note.
    
    Test Data:
    Amount: 2
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a note" helper text
  */
  it("CP 98: Test the transfer form with 2 dollars amount and without note", function () {
    cy.get("#amount").type("2").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 99: Transferencia 7.
    Objetive: Test the transfer form with 999 999 dollars amount and
        a valid note.
    
    Test Data:
    Amount: 999 999
    Note: ABC123$

    Expected Result: Carry out the transaction, show
        Pay button enabled
  */
  it("CP 99: Test the transfer form with 999 999 dollars amount and a valid note", function () {
    cy.get("#amount").type("999999").blur();
    cy.get("#transaction-create-description-input").type("ABC123$").blur();

    cy.getBySel("transaction-create-submit-payment").should("be.enabled");
    cy.visualSnapshot("Transaction Pay Enabled");
  });

  /*
    Test Name: CP 100: Transferencia 8.
    Objetive: Test the transfer form with 999 999 dollars amount and
        without note.
    
    Test Data:
    Amount: 999 999
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a note" helper text
  */
  it("CP 100: Test the transfer form with 999 999 dollars amount and without note", function () {
    cy.get("#amount").type("999999").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 101: Transferencia 9.
    Objetive: Test the transfer form with 1 000 000 dollars amount and
        a valid note.
    
    Test Data:
    Amount: 1 000 000
    Note: ABC123$

    Expected Result: Carry out the transaction, show
        Pay button enabled
  */
  it("CP 101: Test the transfer form with 1 000 000 dollars amount and a valid note", function () {
    cy.get("#amount").type("1000000").blur();
    cy.get("#transaction-create-description-input").type("ABC123$").blur();

    cy.getBySel("transaction-create-submit-payment").should("be.enabled");
    cy.visualSnapshot("Transaction Pay Enabled");
  });

  /*
    Test Name: CP 102: Transferencia 10
    Objetive: Test the transfer form with 1 000 000 dollars amount and
        without note.
    
    Test Data:
    Amount: 1 000 000 
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a note" helper texts
  */
  it("CP 102: Test the transfer form with 1 000 000 dollars amount and without note", function () {
    cy.get("#amount").type("1000000").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });
});

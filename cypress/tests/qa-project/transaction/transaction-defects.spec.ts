import { HTTP_URL, userInfo } from "../../constants";
const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Transaction defects test suite", () => {
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
    Test Name: CP 93: Transferencia 1.
    Objetive: Test the transfer form with zero dollars amount.
    
    Test Data:
    Amount: 0
    Note: ABC123$ 

    Expected Result: Do not carry out the transaction, show
        "Please enter a valid amount" helper text
  */
  it("CP 93: Test the transfer form with zero dollars amount", function () {
    cy.get("#amount").type("0").blur();
    cy.get("#transaction-create-description-input").type("ABC123$").blur();

    cy.get("#transaction-create-amount-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a valid amount");
    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 94: Transferencia 2.
    Objetive: Test the transfer form with zero dollars amount and
        without note.
    
    Test Data:
    Amount: 0
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a valid amount" and "Please enter a note" helper texts
  */
  it("CP 94: Test the transfer form with zero dollars amount and without note", function () {
    cy.get("#amount").type("0").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-amount-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a valid amount");
    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 103: Transferencia 11.
    Objetive: Test the transfer form with zero 1 000 001 (One more than the maximum) amount and
        a valid note.
    
    Test Data:
    Amount: 1 000 001
    Note: ABC123$

    Expected Result: Do not carry out the transaction, show
        "Please enter a valid amount"
  */
  it("CP 103: Test the transfer form with zero 1 000 001 amount and a valid note", function () {
    cy.get("#amount").type("1000001").blur();
    cy.get("#transaction-create-description-input").type("ABC123$").blur();

    cy.get("#transaction-create-amount-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a valid amount");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });

  /*
    Test Name: CP 104: Transferencia 12.
    Objetive: Test the transfer form with 1 000 001 (One more than the maximum) dollars amount and
        without note.
    
    Test Data:
    Amount: 1 000 001
    Note: (Blank)

    Expected Result: Do not carry out the transaction, show
        "Please enter a valid amount" and "Please enter a note" helper texts
  */
  it("CP 104: Test the transfer form with 1 000 001 dollars amount and without note", function () {
    cy.get("#amount").type("1000001").blur();
    cy.get("#transaction-create-description-input").type("note").clear().blur();

    cy.get("#transaction-create-description-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a note");
    cy.get("#transaction-create-amount-input-helper-text")
      .should("be.visible")
      .and("contain", "Please enter a valid amount");

    cy.visualSnapshot("Display Transaction Required Errors");

    cy.getBySel("transaction-create-submit-payment").should("be.disabled");
    cy.visualSnapshot("Transaction Pay Disabled");
  });
});

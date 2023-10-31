import { HTTP_URL, userInfo } from "../../constants";

describe("Transaction test suite", () => {
  beforeEach(() => {
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
  it("CP 93: Transferencia 1", function () {
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
  it("CP 94: Transferencia 2", function () {
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
});

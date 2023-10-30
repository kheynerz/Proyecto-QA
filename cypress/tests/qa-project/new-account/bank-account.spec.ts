/* eslint-disable @typescript-eslint/no-unused-vars */
import { HTTP_URL, userInfo } from "../../constants";
import { BankTestData, bankData } from "./new-bank-TestData";
const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Should perform parametrizable tests for new bank account registration form.", () => {
  beforeEach(function () {
    //Create test seed data to ensure that the tests will run correctly and independently.
    cy.task("db:seed");
    cy.intercept("POST", apiGraphQL, (req) => {
      const { body } = req;
      if (body.hasOwnProperty("operationName") && body.operationName === "CreateBankAccount") {
        req.alias = "gqlCreateBankAccountMutation";
      }
    });

    //Before running the test, log in and navigate to create a bank account.
    cy.intercept("GET", "/signin");
    cy.visit(`${HTTP_URL}/signin`);

    // Login User
    cy.login(userInfo.username, userInfo.password);

    cy.url().should("eq", `${HTTP_URL}/`);
    cy.visit(`${HTTP_URL}/bankaccounts/new`);
  });

  const getTestName = ({ bankName, routingNumber, accountNumber }: BankTestData): string => {
    return bankName.isValid && routingNumber.isValid && accountNumber.isValid
      ? "Should create bank account"
      : "Should display errors";
  };

  bankData.forEach(({ bankName, routingNumber, accountNumber }, index) => {
    it(`CP ${61 + index} ${getTestName({
      bankName,
      routingNumber,
      accountNumber,
    })} with test Data: bankname: ${bankName.value}, routing number: ${
      routingNumber.value
    }, accountNumber: ${accountNumber.value}`, () => {
      let isValid = true;
      cy.getBySelLike("bankName-input").type(bankName.value);
      if (!bankName.isValid) {
        isValid = false;
        cy.get("#bankaccount-bankName-input-helper-text")
          .should("be.visible")
          .and("contain", bankName.message);
      }
      cy.getBySelLike("routingNumber-input").type(routingNumber.value);
      if (!routingNumber.isValid) {
        isValid = false;
        cy.get(`#bankaccount-routingNumber-input-helper-text`)
          .should("be.visible")
          .and("contain", routingNumber.message);
      }
      cy.getBySelLike("accountNumber-input").type(accountNumber.value);
      if (!accountNumber.isValid) {
        isValid = false;
        cy.get("#bankaccount-accountNumber-input-helper-text")
          .should("be.visible")
          .and("contain", accountNumber.message);
      }

      if (isValid) {
        cy.visualSnapshot("Fill out New Bank Account Form");
        cy.getBySelLike("submit").click();
        cy.wait("@gqlCreateBankAccountMutation");

        cy.getBySelLike("bankaccount-list-item")
          .should("have.length", 2)
          .eq(1)
          .should("contain", bankName.value);
        cy.visualSnapshot("Bank Account Created");
        return;
      }

      cy.visualSnapshot("Display of bank registration errors");
      cy.getBySel("bankaccount-submit").should("be.disabled");
      cy.visualSnapshot("Bank Account Form with Errors and Submit button disabled");
    });
  });
});

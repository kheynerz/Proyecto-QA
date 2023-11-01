import { HTTP_URL } from "../../constants";

describe("User registration", () => {
  beforeEach(() => {
    cy.intercept("GET", "/signup");
    cy.visit("/signup");
  });
  /*
    Test Name: CP 49: Should display signup error on last-name.
    Objetive: Test the registration form with blank space on last-name to force an error.
    
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: (Blank)
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled


  it("CP 49: Should display signup error on last-name", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();

    cy.getBySel("signup-last-name").type("Lastname").find("input").clear().blur();
    cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");

    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();

    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP 50: Should display signup error on last-name and confirm-password.
    Objetive: Test the registration form with blank space on last-name, and wrong password
        confirmation to force an error.
    
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: (Blank)
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and confirm-password, the submit button should be disabled

  it("CP 50: Should display signup error on last-name and confirm-password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();

    cy.getBySel("signup-last-name").type("Lastname").find("input").clear().blur();
    cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");

    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();

    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.get("#confirmPassword-helper-text")
      .should("be.visible")
      .and("contain", "Password does not match");
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP 51: Should create user with numeric first-name
    Objetive: Test the registration form with numbers on first-name,
        it should create the user succesfully.
    
    Test Data:
    First Name: 1234567890
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.

  it("CP 51: Should create user with numeric first-name", function () {
    cy.getBySel("signup-first-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();

    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created succesfully");
    cy.visualSnapshot("User created");
  });
  /*
    Test Name: CP 52: Should display signup error on confirm-password, first-name field with numbers
    Objetive: Test the registration form with a confirmation password different from the password
    
    Test Data:
    First Name: 1234567890
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the confirm-password field 
        and the submit button to be disabled

  it("CP 52: Should display signup error on confirm-password, first-name field with numbers", function () {
    cy.getBySel("signup-first-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP 53: Should create user with symbols on first-name
    Objetive: Test the registration form with symbols on first-name,
        it should create the user succesfully.
    Test Data:
    First Name: !@#$%^&*()_+?><
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.

  it("CP 53: Should create user, first-name field with symbols", function () {
    cy.getBySel("signup-first-name").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();

    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created");
  });
  /*
    Test Name: CP 54: Should display signup error on confirm-password, symbols on first-name
    Objetive: Test the registration form with a confirmation password different from the password

    Test Data:
    First Name: !@#$%^&*()_+?><
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the confirm-password field 
        and the submit button to be disabled

  it("CP 54: Should display signup error on confirm-password,first-name field with symbols", function () {
    cy.getBySel("signup-first-name").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP 55: Should create user with a blank space on first-name
    Objetive: Test the registration form with a blank space on first-name,
        it should create the user succesfully

    Test Data:
    First Name: ""
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: It is expected that the user can be created correctly.
*/
  it("CP 55: Should create user, first-name field with empty space", function () {
    cy.getBySel("signup-first-name").type(" ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();

    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created");
  });

  /*
    Test Name: CP 56: Should display signup error on confirm-password.
    Objetive: Test the registration form with a confirmation password different from the password

    Test Data:
    First Name: ""
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the confirm-password field 
        and the submit button to be disabled
*/
  it("CP 56:Should display signup error on confirm-password, first-name field with empty space", function () {
    cy.getBySel("signup-first-name").type(" ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP 57: Should create user,first-name field with letters
    Objetive: Test the registration form ,
        it should create the user succesfully

    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: It is expected that the user can be created correctly.
*/
  it("CP 57: Should create user,first-name field with letters", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();

    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created");
  });

  /*
    Test Name: CP 58: Should display signup error on confirm-password.
    Objetive: Test the registration form with a confirmation password different from the password

    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the confirm-password field 
        and the submit button to be disabled
*/
  it("CP 58: Should display signup error on confirm-password,first-name field with letters", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP 59: Should create user, last name field with symbols
    Objetive: Test the registration form ,
        it should create the user succesfully

    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: !@#$%^&*()_+?><
    Username: !@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: It is expected that the user can be created correctly.
*/
  it("CP 59: Should create user, last name field with symbols", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-username").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();

    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created");
  });

  /*
    Test Name: CP 60: Should display signup error on confirm-password.
    Objetive: Test the registration form with a confirmation password different from the password

    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the confirm-password field 
        and the submit button to be disabled
*/
  it("CP 60: Should display signup error on confirm-password,last name field with letters", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-username").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");

    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
});

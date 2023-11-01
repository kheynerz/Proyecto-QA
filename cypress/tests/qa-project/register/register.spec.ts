import { HTTP_URL } from "../../constants";

describe("User registration", () => {
  beforeEach(() => {
    cy.intercept("GET", "/signup");
    cy.visit("/signup");
  });

  /*
      Test Name: CP1 : With the browser “Chrome”
      Objetive: Test the registration form with all spaces capitalized
      Test Data:
      First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
      Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
      Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
      Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
      Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
      Expected Result: The expected result is the creation of the user 
          and redirection to the sign-in page.
  */
  it("CP1: Should create user succesfully", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
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

  /*Test Name: CP2: With the browser “Chrome”
    Objective: Test the registration form with different password.
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP2: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
    /*
    Test Name: CP3 : With the browser “Chrome”
    Objective: Test the registration form with numeric password.
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: 1234567890
    Confirm Password: 1234567890
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.
  */
  it("CP3: Should create user succesfully", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("1234567890").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();
    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created succesfully");
    cy.visualSnapshot("User created");
  });

  /*Test Name: CP4: With the browser “Chrome”
    Objective: Test the registration form with different password.
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: 1234567890
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP4: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("1234567890").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
    /*
    Test Name: CP5 : With the browser “Chrome”
    Objective: Test the registration form with symbols password.
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: :!@#$%^&*()_+?><
    Confirm Password: :!@#$%^&*()_+?><
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.
  */
  it("CP5: Should create user succesfully", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-confirmPassword").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.visualSnapshot("Before submitting");
    cy.getBySel("signup-submit").click();
    cy.url().should("eq", `${HTTP_URL}/signin`);
    cy.visualSnapshot("User created succesfully");
    cy.visualSnapshot("User created");
  }); 
  /*
  Test Name: CP6: With the browser “Chrome”
  Objective: Test the registration form with different password
  Test Data: 
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: :!@#$%^&*()_+?><
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

  Expected Result: The expected result is an error on the lastname field 
      and the submit button to be disabled
  */
  it("CP6: Should display signup error on password and confirm password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });


  /*
    Test Name: CP7: With the browser “Chrome”
    Objective: Test the registration form with blank password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: Blank
    Confirm Password: Blank

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP7: Should display signup error on password and confirm password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("Blank").find("input").clear().blur();
    
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Confirm your password");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP8: With the browser “Chrome”
    Objective: Test the registration form with blank password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: Blank
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP8: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

    /*
    Test Name: CP9 : With the browser “Chrome”
    Objective: Test the registration form with numeric username
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.
  */
  it("CP9: Should create user succesfully", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
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
    Test Name: CP10: With the browser “Chrome”
    Objective: Test the registration form with different username and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP10: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP11 : With the browser “Chrome”
    Objective: Test the registration form with symbols on username
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: :!@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.
  */
  it("CP11: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  });
  /*
  Test Name: CP12: With the browser “Chrome”
  Objective: Test the registration form with symbols on username and different password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: :!@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP12: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();

    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP13: With the browser “Chrome”
    Objective: Test the registration form with blank username and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: Blank
    Password: Blank
    Confirm Password: Blank

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP13: Should display signup error on username,password and confirm password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("Blank").find("input").clear().blur();
    
    cy.get("#username-helper-text").should("be.visible").and("contain", "Username is required");
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Confirm your password");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP14: With the browser “Chrome”
    Objective: Test the registration form with blank username and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: Blank
    Password: Blank
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP14: Should display signup error on username and password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    
    cy.get("#username-helper-text").should("be.visible").and("contain", "Username is required");
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP15 : With the browser “Chrome”
    Objective: Test the registration form with numeric last name
    Test Data:
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Expected Result: The expected result is the creation of the user 
        and redirection to the sign-in page.
  */
  it("CP15: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
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
    Test Name: CP16: With the browser “Chrome”
    Objective: Test the registration form with numeric last name and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP16: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP17 : With the browser “Chrome”
  Objective: Test the registration form with symbols last name
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: :!@#$%^&*()_+?><
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP17: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP18: With the browser “Chrome”
    Objective: Test the registration form with symbols last name
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: :!@#$%^&*()_+?><
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP18: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP19: With the browser “Chrome”
    Objective: Test the registration form with blank last name
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: Blank
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP19: Should display signup error on last-name", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("Blank").find("input").clear().blur();
    cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP20: With the browser “Chrome”
    Objective: Test the registration form with blank last name 
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: Blank
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP20: Should display signup error on last-name", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("Blank").find("input").clear().blur();
    cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP21 : With the browser “Chrome”
  Objective: Test the registration form with numeric first name
  Test Data:
  First Name: 1234567890
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP21: Should create user with numeric first-name", function () {
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
    Test Name: CP22: With the browser “Chrome”
    Objective: Test the registration form with numeric first name
    Test Data: 
    First Name: 1234567890
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP22: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP23 : With the browser “Chrome”
  Objective: Test the registration form with symbols first name
  Test Data:
  First Name: :!@#$%^&*()_+?><
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP23: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type(":!@#$%^&*()_+?><").find("input").blur();
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
    Test Name: CP24: With the browser “Chrome”
    Objective: Test the registration form with
    Test Data: 
    First Name: :!@#$%^&*()_+?><
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP24: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP25 : With the browser “Chrome”
  Objective: Test the registration form with blank firts name
  Test Data:
  First Name: Blank
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
      it("CP25: Should display signup error", function () {
        cy.getBySel("signup-first-name").type("Blank").find("input").clear().blur();
        
        cy.get("#firstName-helper-text").should("be.visible").and("contain", "First Name is required");
        
        cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
        //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
        cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
        cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
        cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
        cy.visualSnapshot("Display Sign Up Required Errors");
        cy.getBySel("signup-submit").should("be.disabled");
        cy.visualSnapshot("Sign Up Submit Disabled");
      });
  /*
    Test Name: CP26: With the browser “Chrome”
    Objective: Test the registration form with blank fist name
    Test Data: 
    First Name: Blank
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP26: Should display signup error on first name", function () {
    cy.getBySel("signup-first-name").type("Blank").find("input").clear().blur();

    cy.get("#firstName-helper-text").should("be.visible").and("contain", "First Name is required");

    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP27 : With the browser “Chrome”
  Objective: Test the registration form with numeric last name and username
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: 1234567890
  Username: 1234567890
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP27: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
  cy.getBySel("signup-username").type("1234567890").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP28: With the browser “Chrome”
    Objective: Test the registration form with capitalize letters on first name
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP28: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP29 : With the browser “Chrome”
  Objective: Test the registration form with symbols on last name and user name
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: :!@#$%^&*()_+?><
  Username: :!@#$%^&*()_+?><
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP29: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP30: With the browser “Chrome”
    Objective: Test the registration form with equals symbols on last name and username
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: :!@#$%^&*()_+?><
    Username: :!@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP30: Should display signup error on password", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP31 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with letters on all spaces
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP31: Should create user with alphabet", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
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
    Test Name: CP32: With the browser “Mozilla Firefox”
    Objective: Test the registration form with numeric confirm password and letters password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP32: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });


  /*
  Test Name: CP33 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with numeric password and confirm password
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: 1234567890
  Confirm Password: 1234567890
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP33: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-password").type("1234567890").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 


  /*
    Test Name: CP34: With the browser “Mozilla Firefox”
    Objective: Test the registration form with numeric password and letters confirm password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: 1234567890
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP34: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("1234567890").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP35 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with symbols on password and confirm password
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: :!@#$%^&*()_+?><
  Confirm Password: :!@#$%^&*()_+?><
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP35: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-password").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-confirmPassword").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP36: With the browser “Mozilla Firefox”
    Objective: Test the registration form with symbols password and letters confirm passwor
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: :!@#$%^&*()_+?><
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP36: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP37: With the browser “Mozilla Firefox”
    Objective: Test the registration form with blank confirm password and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: Blank
    Confirm Password: Blank

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP37: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("Blank").find("input").clear().blur();
    
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Confirm your password");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP38: With the browser “Mozilla Firefox”
    Objective: Test the registration form with blank password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: Blank
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP38: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP39 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with numeric username
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: 1234567890
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP39: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type("1234567890").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP40: With the browser “Mozilla Firefox”
    Objective: Test the registration form with numeric username
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: 1234567890
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP40: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP41 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with symbols on username
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: :!@#$%^&*()_+?><
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP41: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 


  /*
    Test Name: CP42: With the browser “Mozilla Firefox”
    Objective: Test the registration form with symbols on username
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: :!@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP42: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP43: With the browser “Mozilla Firefox”
    Objective: Test the registration form with blank username, password and confirm password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: Blank
    Password: Blank
    Confirm Password: Blank

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP43: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("Blank").find("input").clear().blur();
    
    cy.get("#username-helper-text").should("be.visible").and("contain", "Username is required");
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Confirm your password");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });
  /*
    Test Name: CP44: With the browser “Mozilla Firefox”
    Objective: Test the registration form with blank username and password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: Blank
    Password: Blank
    Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP44: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-password").type("Blank").find("input").clear().blur();
    cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    
    cy.get("#username-helper-text").should("be.visible").and("contain", "Username is required");
    cy.get("#password-helper-text").should("be.visible").and("contain", "Enter your password");
    
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP45 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with numeric last name
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: 1234567890
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP45: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
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
    Test Name: CP46: With the browser “Mozilla Firefox”
    Objective: Test the registration form with numeric last name and confirm password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: 1234567890
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP46: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP47 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with symbols on last name
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: :!@#$%^&*()_+?><
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP47: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
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
    Test Name: CP48: With the browser “Mozilla Firefox”
    Objective: Test the registration form with symbols on last name and numeric on confirm password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: :!@#$%^&*()_+?><
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP48: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
    //cy.get("#lastName-helper-text").should("be.visible").and("contain", "Last Name is required");
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
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
  */
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
  */
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
  */
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
  */
  it("CP 52: Should display signup error on confirm-password, first-name field with numbers", function () {
    cy.getBySel("signup-first-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

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
  */
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
  */
  it("CP 54: Should display signup error on confirm-password,first-name field with symbols", function () {
    cy.getBySel("signup-first-name").type("!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP55 : With the browser “Mozilla Firefox”
  Objective: Test the registration form with blank fist name
  Test Data:
  First Name: Blank
  Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ

  Expected Result: The expected result is an error on the lastname field 
      and the submit button to be disabled
  */
  it("CP55: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("Blank").find("input").clear().blur();

  cy.get("#firstName-helper-text").should("be.visible").and("contain", "First Name is required");

  cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Display Sign Up Required Errors");
  cy.getBySel("signup-submit").should("be.disabled");
  cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
    Test Name: CP56: With the browser “Mozilla Firefox”
    Objective: Test the registration form with blank firts name and numeric confirm password
    Test Data: 
    First Name: Blank
    Last Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Username: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP56: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("Blank").find("input").clear().blur();

    cy.get("#firstName-helper-text").should("be.visible").and("contain", "First Name is required");

    cy.getBySel("signup-last-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-username").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();

    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");

    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP57 : With the browser “Mozilla Firefox”
  Objective: Test the registration form numeric last name and username
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: 1234567890
  Username: 1234567890
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP57: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
  cy.getBySel("signup-username").type("1234567890").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
  Test Name: CP58: With the browser “Mozilla Firefox”
  Objective: Test the registration form with numeric last name, username and confirm password
  Test Data: 
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: 1234567890
  Username: 1234567890
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: 1234567890

  Expected Result: The expected result is an error on the lastname field 
      and the submit button to be disabled
  */
  it("CP58: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type("1234567890").find("input").blur();
    cy.getBySel("signup-username").type("1234567890").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

  /*
  Test Name: CP59 : With the browser “Mozilla Firefox”
  Objective: Test the registration form symbols last name and username
  Test Data:
  First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Last Name: :!@#$%^&*()_+?><
  Username: :!@#$%^&*()_+?><
  Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Confirm Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
  Expected Result: The expected result is the creation of the user 
      and redirection to the sign-in page.
  */
  it("CP59: Should create user succesfully", function () {
  cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
  cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.getBySel("signup-confirmPassword").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
  cy.visualSnapshot("Before submitting");
  cy.getBySel("signup-submit").click();
  cy.url().should("eq", `${HTTP_URL}/signin`);
  cy.visualSnapshot("User created succesfully");
  cy.visualSnapshot("User created");
  }); 

  /*
    Test Name: CP60: With the browser “Mozilla Firefox”
    Objective: Test the registration form with symbols on last name, username and numbers in confirm password
    Test Data: 
    First Name: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Last Name: :!@#$%^&*()_+?><
    Username: :!@#$%^&*()_+?><
    Password: ABCDEFGHIJKLMNOPKRSTUVWXYZ
    Confirm Password: 1234567890

    Expected Result: The expected result is an error on the lastname field 
        and the submit button to be disabled
  */
  it("CP60: Should display signup error", function () {
    cy.getBySel("signup-first-name").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-last-name").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-username").type(":!@#$%^&*()_+?><").find("input").blur();
    cy.getBySel("signup-password").type("ABCDEFGHIJKLMNOPKRSTUVWXYZ").find("input").blur();
    cy.getBySel("signup-confirmPassword").type("1234567890").find("input").blur();
    
    cy.get("#confirmPassword-helper-text").should("be.visible").and("contain", "Password does not match");
    
    cy.visualSnapshot("Display Sign Up Required Errors");
    cy.getBySel("signup-submit").should("be.disabled");
    cy.visualSnapshot("Sign Up Submit Disabled");
  });

});

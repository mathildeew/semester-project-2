const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
  wrongPassword: "føhoIW",
};

describe("Log in", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);

    cy.request("POST", "/json").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Can log in with valid credentials", () => {
    cy.get("#loginBtnHome").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();
    cy.wait(1000);

    cy.then(() => {
      expect(localStorage.getItem("token")).to.not.eq(null);
    });
  });

  it("Shows error message if login credentials is invalid and token is not stored", () => {
    cy.get("#loginBtnHome").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.wrongPassword);
    cy.get("#loginBtn").contains("Log in").click();
    cy.wait(1000);
    cy.get(".errorMessage").contains("Invalid email or password");
    cy.wait(1000);

    cy.then(() => {
      expect(localStorage.getItem("token")).to.eq(null);
    });
  });
});

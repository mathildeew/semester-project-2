const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
};

describe("post", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
  });

  it("Can log in with valid credentials", () => {
    cy.get("#navBtn").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();

    cy.url().should("include", "/", () => {
      expect(localStorage.getItem("token")).to.exist();
    });
  });

  //   it("Can create an auction", () => {});
  //   it("Can place a bid on an auction", () => {});
  //   it("Can register a new user", () => {});
});

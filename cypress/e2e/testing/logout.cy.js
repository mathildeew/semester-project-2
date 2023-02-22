const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
};

describe("Log out", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/accounts/login");
    cy.wait(1000);
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("button[type=submit]").contains("Log in").click;
    cy.wait(1000);
    cy.visit("/profile/");
  });

  it("Can log out with the logout button", () => {
    cy.get("button").contains("Log out").click();
  });
});

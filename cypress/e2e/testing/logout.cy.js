const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
};

describe("Log out", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#loginBtnHeader").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();
    cy.wait(1000);
  });

  it("Can log out with the logout button", () => {
    cy.get("#navBtn").click();
    cy.wait(1000);
    cy.get("#logoutBtn").contains("Log out").click();
    cy.wait(1000);
    cy.then(() => {
      expect(localStorage.getItem("token")).to.eq(null);
    });
  });
});

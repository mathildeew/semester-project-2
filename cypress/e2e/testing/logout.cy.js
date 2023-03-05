const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
};

describe("Log out", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#loginBtnHome").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();
    cy.wait(1000);

    cy.request("POST", "/json").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Can log out with the logout button", () => {
    cy.get("#navBtn").click();
    cy.get("#settingsProfile").contains("Settings").click();
    cy.get("#logoutBtn").contains("Log out").click();

    cy.then(() => {
      expect(localStorage.getItem("token")).to.eq(null);
    });
  });
});

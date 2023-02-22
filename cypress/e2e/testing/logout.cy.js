const TEST_USER = {
  email: "johnsmith@stud.noroff.no",
  password: "Password123",
  invalidPassword: "InvalidPassword",
};

describe("Log in", () => {
  beforeEacy(() => {
    cy.clearLocalStorage();
    cy.visit("/");
  });
});

it(
  ("User can log in with valid credentials, and the json is saved to localstorage",
  () => {
    cy.visit();
  })
);

it("The user can not log in with invalid credentials", () => {});

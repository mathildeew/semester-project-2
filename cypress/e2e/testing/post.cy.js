const TEST_USER = {
  email: "onkel@stud.noroff.no",
  password: "Gurkemeie69",
};

const TEST_POST = {
  title: "Selling my boat",
  media:
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Inflatable_boat_with_mercury_4hp_engine.JPG",
  description: "Brand new :)",
};

describe("POST /json", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
  });

  it("Can log in with valid credentials", () => {
    cy.get("#loginBtnHeader").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();
    cy.request("POST", "/json").then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.location("pathname")
      .should("equal", "/")
      .then(() => {
        expect(localStorage.getItem("token")).to.be.a("string");
      });
  });

  it("Can create an auction", () => {
    cy.get("#loginBtnHeader").click();
    cy.get("#loginForm button").contains("Log in").click();
    cy.wait(1000);
    cy.get("input[name=email]").type(TEST_USER.email);
    cy.get("input[name=password").type(TEST_USER.password);
    cy.get("#loginBtn").contains("Log in").click();

    cy.get("#newAuctionModalBtn").contains("New auction").click();
    cy.get("input[name=title]").type(TEST_POST.title);
    cy.get(" #mediaOne").type(TEST_POST.media);
    cy.get("textarea[type=text]").type(TEST_POST.description);
    cy.get("button").contains("Create auction").click();

    cy.request("POST", "/json").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

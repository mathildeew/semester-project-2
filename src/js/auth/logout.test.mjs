import { LocalStorageMock } from "../storage/localStorageMock";
import { logout } from "./logout.mjs";

const TEST_TOKEN = "tokentokentoken";

global.localStorage = new LocalStorageMock();

localStorage.setItem("token", TEST_TOKEN);

describe("Logout", () => {
  expect(localStorage.getItem("token")).toEqual(TEST_TOKEN);

  it("Clears the token from localStorage", () => {
    logout();
    expect(localStorage.getItem("token")).toBeUndefined();
  });
});

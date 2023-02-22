import { loginAPI } from "./login.mjs";
import { LocalStorageMock } from "../../storage/localStorageMock.js";

const TEST_EMAIL = "johnsmith@stud.noroff.no";
const TEST_PASSWORD = "Password123";
const TEST_TOKEN = "tokentokentokentoken";

const TEST_JSON = {
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  accessToken: TEST_TOKEN,
};

global.localStorage = new LocalStorageMock();

/**
 * A mock fetch function that fetches the API successfully and stores the accesstoken in localStorage
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "",
    json: () => Promise.resolve(TEST_JSON),
  });
}

describe("Log in", () => {
  it("Stores a token when provided with valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const respone = await loginAPI(TEST_EMAIL, TEST_PASSWORD);
    Exception(response).toEqual(TEST_JSON);
    expect(localStorage.setItem("token")).toEqual(TEST_JSON.accessToken);
  });
});

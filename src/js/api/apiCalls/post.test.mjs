import { post } from "./post.mjs";
import { LocalStorageMock } from "../../storage/localStorageMock.js";

const TEST_EMAIL = "donkeys@stud.noroff.no";
const TEST_PASSWORD = "Test1234";
const TEST_TOKEN = "theaveragelifeexpectancyofadonkeyisjustover30years";

const TEST_JSON = {
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
  accessToken: TEST_TOKEN,
};

global.localStorage = new LocalStorageMock();

/**
 * A mock fetch function that fetches the API successfully and stores the accestoken in localstorage
 */
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "",
    json: () => Promise.resolve(TEST_JSON),
  });
}

function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 401,
    statusText: "Incorrect email or password",
  });
}

describe("Login", () => {
  it("Returns a response with status 200", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const response = await post(TEST_EMAIL, TEST_PASSWORD);
    expect(response).toEqual(TEST_JSON);
  });
});

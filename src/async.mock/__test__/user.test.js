import { verifyUsername } from "../verify";
import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    await expect(register("username", "password")).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register("username", "password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});

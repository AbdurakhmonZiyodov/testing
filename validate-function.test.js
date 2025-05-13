import { validateEmail } from "./validate-function";

describe("checking validateEmail", () => {
  it("should return error if email is empty", () => {
    expect(validateEmail("")).toBe("Email is required");
  });
  it("should return error if email doesn't include @", () => {
    expect(validateEmail("test.com")).toBe("Email is invalid");
  });
  it("should return null if email is valid", () => {
    expect(validateEmail("test@gmail.com")).toBe(null);
  });
});

const factorialOf = require("services/factorial");

describe(".factorialOf", () => {
  it("return 1 when given number is 0", () => {
    expect(factorialOf(0)).toBe(1);
  });
});

const factorialOf = require("../../services/factorial");

describe(".factorialOf", () => {
  it("returns 1 when given number is 0", () => {
    expect(factorialOf(0)).toBe(1);
  });

  it("returns 1 when given number is 1", () => {
    expect(factorialOf(1)).toBe(1);
  });
});

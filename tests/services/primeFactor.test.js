const primeFactorsOf = require("../../services/primeFactor");

describe("primeFactors", () => {
  it("should return empty list when given number is 1", () => {
    //ARRANGE
    const n = 1;

    //ACT
    const result = primeFactorsOf(n);

    //ASSERT
    expect(result).toEqual([]);
  });

  it("should return list with 2 when given number is 2", () => {
    const n = 2;

    const result = primeFactorsOf(n);

    expect(result).toEqual([2]);
  });

  it("should return list with 3 when given number is 3", () => {
    expect(primeFactorsOf(3)).toEqual([3]);
  });
});

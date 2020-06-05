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

  it("should return list with [2, 2] when given number is 4", () => {
    expect(primeFactorsOf(4)).toEqual([2, 2]);
  });

  it("should return list with [5] when given number is 5", () => {
    expect(primeFactorsOf(5)).toEqual([5]);
  });

  it("should return list with [2, 3] when given number is 6", () => {
    expect(primeFactorsOf(6)).toEqual([2, 3]);
  });

  it("should return list with [7] when given number is 7", () => {
    expect(primeFactorsOf(7)).toEqual([7]);
  });
});

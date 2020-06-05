const primeFactorOf = require("../../services/primeFactor");

describe("primeFactor", () => {
  it("should return empty list when given number is 1", () => {
    //ARRANGE
    const n = 1;

    //ACT
    const result = primeFactorOf(n);

    //ASSERT
    expect(result).toEqual([]);
  });

  it("should return list with 2 when given number is 2", () => {
    const n = 2;

    const result = primeFactorOf(n);

    expect(result).toEqual([2]);
  });

  it("should return list with 3 when given number is 3", () => {
    expect(primeFactorOf(3)).toEqual([3]);
  });
});

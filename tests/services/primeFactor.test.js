const primeFactorOf = require("../../services/primeFactor");

describe("primeFactor", () => {
  it("should return empty list when given number is 1", () => {
    //ARRANGE
    const n = 1;

    //ACT
    const result = primeFactorOf(1);

    //ASSERT
    expect(result).toEqual([]);
  });
});

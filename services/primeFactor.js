module.exports = function primeFactorsOf(n) {
  const factors = [];
  let remainder = n;
  let divisor = 2;

  while (remainder > 1) {
    while (remainder % divisor === 0) {
      factors.push(divisor);
      remainder = remainder / divisor;
    }

    divisor++;
  }

  return factors;
};

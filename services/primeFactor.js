module.exports = function primeFactorsOf(n) {
  const factors = [];
  let remainder = n;

  if (n > 1) {
    while (remainder % 2 === 0) {
      factors.push(2);
      remainder = remainder / 2;
    }
  }

  if (remainder > 1) {
    factors.push(remainder);
  }

  return factors;
};

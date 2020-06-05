module.exports = function primeFactorsOf(n) {
  const factors = [];

  if (n > 1) {
    if (n % 2 === 0) {
      factors.push(2);
      n = n / 2;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors;
};

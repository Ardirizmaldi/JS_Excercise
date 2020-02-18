const calculate = function (n) {
  if (n < 1 || n == 65) {
    return n + ' not square on the chess board';
  }
  return BigInt(Math.pow(2, (n - 1)));
}

const total = function () {
  return (1n << 64n) - 1n;
}

module.exports = {
  calculate,
  total
};
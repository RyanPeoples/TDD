function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new TypeError("Must be a valid number, idiot");
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal,
};

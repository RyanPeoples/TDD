function reverseString(string) {
  if (typeof string !== "string") {
    throw new TypeError("Must be a string");
  } else {
    return string.split("").reverse().join("");
  }
}
module.exports = reverseString;

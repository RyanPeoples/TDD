const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string");

describe("reverseString(string)", () => {
  it("Should return string reversed", () => {
    const newWord = "fun";
    const results = reverseString(newWord);
    expect(results).to.equal("nuf");
  });
  it("Should throw an error if string is not a type of string", () => {
    const num = 2;
    const object = {};
    const array = [];
    expect(() => reverseString(num)).to.throw(TypeError);
    expect(() => reverseString(object)).to.throw(TypeError);
    expect(() => reverseString(array)).to.throw(TypeError);
  });
});

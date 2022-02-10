const chai = require("chai");
const expect = chai.expect;

const { returnsThree } = require("../problems/number-fun");
const { reciprocal } = require("../problems/number-fun");

describe("returnsThree()", () => {
  it("Should return three", () => {
    const res = returnsThree();
    expect(res).to.equal(3);
  });
});

describe("reciprocal(num)", () => {
  it("Should return reciprocal of num", () => {
    // const whole = reciprocal(1/2)
    const frac = reciprocal(2);
    // expect(whole).to.equal(2)
    expect(frac).to.equal(1 / 2);
  });
  it("Should throw TypeError if below 1", () => {
    const num = 0.5;
    expect(() => reciprocal(num)).to.throw(TypeError);
  });
  it("Should throw TypeError if more than 1000000", () => {
    const num = 1000001;
    expect(() => reciprocal(num)).to.throw(TypeError);
  });
});

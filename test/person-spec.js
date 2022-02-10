const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person.js");

describe("person", () => {
  let newPerson;
  let otherPerson;
  beforeEach(() => {
    newPerson = new Person("Paul", 27);
    otherPerson = new Person("Ryan", 24);
  });
  it("Should have a name and age property", () => {
    expect(newPerson).to.have.property("name");
    expect(newPerson).to.have.property("age");
  });
  it('Should return person"s name and a greeting message', () => {
    expect(newPerson.sayHello()).to.equal('What"s up, Paul?');
  });
  it("Should stay person visited other person", () => {
    const result = newPerson.visit(otherPerson);
    const otherName = otherPerson.name;
    expect(result).to.equal("Paul visited Ryan!");
  });
  it("Switch visit should work", () => {
    const result = newPerson.switchVisit(otherPerson);
    expect(result).to.equal("Ryan visited Paul!");
  });
  describe("update(obj) should follow these three outputs", () => {
    it("Should throw TypeError if argument is not object", () => {
      const string = "i am a string";
      const number = 1;
      const array = ["i", "am", "an", "array"];

      expect(() => Person.update(string)).to.throw(TypeError);
      expect(() => Person.update(number)).to.throw(TypeError);
      expect(() => Person.update(array)).to.throw(TypeError);
    });
    it("Should update instance", () => {
      const result = newPerson.update({name: 'Turdburgler', age: 2})
      expect(newPerson.name).to.equal('Turdburgler')
      expect(newPerson.age).to.equal(2)
    });
    describe('try update tells if update works', () => {
      it('returns true if update works', () => {

      })
      it('returns false if update doesn"t work', () => {
        
      })
    })
  });
});

const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
const { greetAll } = require("../problems/person.js");
chai.use(spies);
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
        const obj = { name: 'Mary', age: 12 }
        const res = newPerson.tryUpdate(obj);
        expect(newPerson.name).to.equal(obj.name);
        expect(newPerson.age).to.equal(obj.age);
      })
      it('returns false if update doesn"t work', () => {
        const obj = {name: 122, age:'twelve'}
        const res = newPerson.tryUpdate(obj);
        expect(newPerson.name).to.not.equal(obj.name);
        expect(newPerson.age).to.not.equal(obj.age);
      })
    })
  });
  describe("greetAll(obj) should greet all",()=>{
    it("should call sayHello on all instances", () => {
      const person2 = new Person("jeff", 30);
      let introSpy = chai.spy.on(newPerson, "sayHello");
      let introSpy2 = chai.spy.on(person2, "sayHello");
      Person.greetAll([newPerson, person2]);
      expect(introSpy).to.have.been.called.once;
      expect(introSpy2).to.have.been.called.once;
    })
    it("should return array joined into string",()=>{
      const person = new Person("jeff", 30);
      const person1 = new Person("Joon", 30);
      const person2 = new Person("Brad", 30);
      const person3 = new Person("Kelly", 30);
      let result = Person.greetAll([person, person1, person2, person3]);
      expect(result).to.equal('What"s up, jeff? What"s up, Joon? What"s up, Brad? What"s up, Kelly?')
    })
  })
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `What"s up, ${this.name}?`
  }
  visit(otherPerson) {
    if (typeof otherPerson === 'object') {
    return `${this.name} visited ${otherPerson.name}!`
    } else {
      return `${this.name} visited ${otherPerson}!`
    }
  }
  switchVisit = (otherPerson) => {
    const name = this.name;
    return otherPerson.visit(name)
  }
  update(obj) {
    if (typeof obj !== 'object') {
      throw TypeError('Has to be an object')
    } else {
      this.name = obj.name
      this.age = obj.age
    }
  }
}

module.exports = Person;

// Prototype
console.log(Array.__proto__);
console.log(Object.__proto__);

//Prototypal inheritance
function Person(name) {
  this.name = name;
}

const person = new Person("Enayet");

Person.prototype.abc = function (age) {
  console.log(`${this.name} is ${age} year old`);
};

console.log(person);
console.log(person.__proto__);
console.log(person.abc(23));

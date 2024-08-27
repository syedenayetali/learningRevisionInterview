// function declaration
function abc() {
  console.log("Enayet");
}

// function expression
const abc = () => {
  console.log("Enayet");
};

// Constructor function
class Person {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log("My name is ", this.name);
  }
}

const person1 = new Person("Enayet");
person1.print();

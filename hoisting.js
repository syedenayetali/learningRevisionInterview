const a = 5;
console.log(a); //output:: 5

console.log(b); //output:: Ref error:: Cannot access 'a' before initialization
const b = 5;

console.log(c); //output:: Ref error:: c is not defined

console.log(d); //output:: Undefined
var d = 5;

// Yes, both let and const are hoisted, but they behave differently from var.

// When a variable is declared with let or const, it is hoisted to the top of its block scope,
// but it is not initialized. This means that while the declaration is moved to the top of the block,
// the variable is not assigned a value until the execution reaches the actual line of code where it is defined.
// As a result, if you try to access the variable before its declaration, you'll encounter a ReferenceError.

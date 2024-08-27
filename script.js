// function abc() {
//   return () => {
//     return () => {
//       return () => {
//         return () => {
//           return () => {
//             return () => {
//               return () => {
//                 console.log("Enayet");
//               };
//             };
//           };
//         };
//       };
//     };
//   };
// }

// abc()()()()()()()(); //this step is important

// const add = (a, b) => {
//   return a + b;
// };

// const call = (operation) => {
//   return function (a) {
//     return function (b) {
//       return operation(a, b);
//     };
//   };
// };

// console.log(call(add)(10)(20));

// console.log(fun());

// let fun = () => {
//   console.log("Enayet");
// };

// let a = 5;
// let b = a;

// b = 18;

// console.log(a);
// console.log(b);

// const ob1 = {
//   name: "Enayet",
// };

// const ob2 = ob1;

// console.log(ob1);
// console.log(ob2);

// ob2.name = "Jaffer";
// console.log(ob1);
// console.log(ob2);

// const ob1 = { name: "Enayet" };

// function myFun(age) {
//   console.log("My anme is ", this.name, " and my age is", age);
// }

// const newFn = myFun.bind(ob1, 28);
// newFn();

//10, 50
//half of 1st
//i/5 of second
//add both

// const half = (a) => a / 2;
// const oneFifth = (b) => b / 5;
// const add = (a, b) => a + b;

// console.log(add(half(10), oneFifth(50)));

// const add = (a, b) => {
//   return a + b;
// };
// const multiply = (a, b) => {
//   return a * b;
// };

// const myFun = (operation) => {
//   return (a) => {
//     return (b) => {
//       console.log(operation(a, b));
//     };
//   };
// };

// myFun(add)(10)(20);
// myFun(multiply)(10)(20);

// const counter = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// const counter1 = counter();
// const counter2 = counter();

// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter2();

// Array.prototype.sum = function (a, b) {
//   return a + b;
// };

// const ar = [];

// console.log(ar.sum(7, 8));

// function Person() {}

// Person.prototype.sum = function (a, b) {
//   return a + b;
// };

// const person1 = new Person();
// console.log(person1);

const str = "My name is khan and I am not a terrorist";
const strArr = str.toLowerCase(str).split(" ").join("").split("");

const ob = {};
console.log(strArr);
strArr.forEach((e) => {
  if (ob[e]) {
    ob[e] = ob[e] + 1;
  } else {
    ob[e] = 1;
  }
});
console.log(ob);

let count = 0;
let char;

for (let e in ob) {
  console.log(e);
  if (ob[e] > count) {
    count = ob[e];
    char = e;
  }
}
console.log(count);
console.log(char);

const arr = [123, 1234, 234, 345, 345, 768, 65, 43, 21, 465, 76];

console.log(arr.splice(2, 6));
console.log(arr);

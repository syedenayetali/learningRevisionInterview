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

// const str = "My name is khan and I am not a terrorist";
// const strArr = str.toLowerCase(str).split(" ").join("").split("");

// const ob = {};
// console.log(strArr);
// strArr.forEach((e) => {
//   if (ob[e]) {
//     ob[e] = ob[e] + 1;
//   } else {
//     ob[e] = 1;
//   }
// });
// console.log(ob);

// let count = 0;
// let char;

// for (let e in ob) {
//   console.log(e);
//   if (ob[e] > count) {
//     count = ob[e];
//     char = e;
//   }
// }
// console.log(count);
// console.log(char);

// const arr = [123, 1234, 234, 345, 345, 768, 65, 43, 21, 465, 76];

// console.log(arr.splice(2, 6));
// console.log(arr);
// function Person(name) {
//   this.name = name;
// }

// const person = new Person("Enayet");

// Person.prototype.abc = function (age) {
//   console.log(`${this.name} is ${age} year old`);
// };

// console.log(person);
// console.log(person.__proto__);
// console.log(person.abc(23));
// console.log(a);

// abc();

// const abc = () => {
//   console.log("Enayet");
// };
// console.log(String.prototype);

// function Person(name) {
//   this.name = name;
// }

// const person = new Person("Enayet");

// Person.prototype.abc = function (age) {
//   console.log(`${this.name} is ${age} year old`);
// };

// console.log(person);
// console.log(person.__proto__);
// console.log(person.abc(23));

// document.getElementById("div1").addEventListener("click", () => console.log("button1"));
// document.getElementById("div2").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("button2");
// });
// document.getElementById("div3").addEventListener("click", () => console.log("button3"));

// let statement = "My anme is khan and I am not a terrorist";
// statement = statement.trim().toLowerCase().split(" ").join("");
// const newOb = {};
// for (let i of statement) {
//   if (!newOb[i]) {
//     newOb[i] = 1;
//   } else {
//     newOb[i] = newOb[i] + 1;
//   }
// }
// console.log(newOb);
// const largest = {
//   char: "",
//   num: 0,
// };
// let count = 0;
// let char;

// for (let e in newOb) {
//   if (newOb[e] > count) {
//     largest.char = newOb[e];
//     largest.num = e;
//   }
// }
// console.log(largest);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 4, 3, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 6, 5, 4];
// arr.sort((a, b) => a - b);
// console.log(arr);
// const newArr = new Set(arr);
// console.log([...newArr]);
// const newOb = {};
// for (let i of arr) {
//   if (!newOb[i]) {
//     newOb[i] = 1;
//   } else {
//     newOb[i] = newOb[i] + 1;
//   }
// }
// console.log(newOb);

// const ob = {
//   name: "Enayet",
//   myFun: function () {
//     console.log(this);
//   },
// };
// ob.myFun();

// const name = "Syed Enayet Ali";
// console.log(`${name.substring(0, 13)}...`);

// const people = [
//   { name: "Alice", age: 30 }, // > 26
//   { name: "Bob", age: 28 }, // > 26
//   { name: "Charlie", age: 22 }, // < 26
//   { name: "Daisy", age: 24 }, // < 26
// ];

// const newArr = people.filter((elem) => elem.age > 26);
// // newArr.map(elem=> `${elem.name}: ${elem.age}<br>`).join('')

// document.getElementById("app").innerHTML = newArr.map((elem) => `${elem.name}: ${elem.age}<br>`).join("");

// const prom1 = new Promise((res, rej) => {
//   const val = 5;
//   setTimeout(() => {
//     val === 5 ? res("Success1") : rej("Failed1");
//   }, 0);
// });
// const prom2 = new Promise((res, rej) => {
//   const val = 5;
//   val === 5 ? res("Success2") : rej("Failed2");
// });
// const prom3 = new Promise((res, rej) => {
//   const val = 5;
//   val === 5 ? res("Success3") : rej("Failed3");
// });
// const prom4 = new Promise((res, rej) => {
//   const val = 6;
//   val === 5 ? res("Success4") : rej("Failed4");
// });

// Promise.race([prom1, prom2, prom3, prom4])
//   .then((e) => console.log(e))
//   .catch((err) => console.error(err))
//   .finally(() => console.log("enayet"));

// const arr = [2, 3, 9, 5, 7, 8, 8, 5, 4, 3, 1, 0, 3, 2, 6, 3, 4, 6, 7, 8, 9, 9, 0, 8, 9, 7, 6, 5, 4, 3, 3, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.length);
// console.log([...new Set(arr)]);
// console.log(arr.sort((a, b) => a - b)[arr.length - 1]);

// for (let i = 0; i < arr.length - 1; i++) {
//   if (i === 0) {
//     arr.push([arr[i]]);
//   } else {
//     if (!arr[arr.length - 1].includes(arr[i])) {
//       //   console.log(arr[i]);
//       arr[arr.length - 1].push(arr[i]);
//     }
//   }
// }
// console.log(arr[arr.length - 1]);

// let strng =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thes, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// strng = strng.toLowerCase().split(".").join("").split(" ").join("").split("");

// const ob = {};
// for (let i of strng) {
//   if (!ob[i]) {
//     ob[i] = 1;
//   } else {
//     ob[i] = ob[i] + 1;
//   }
// }
// console.log(ob);
// let largestCt = { alph: "", count: 0 };

// for (let i in ob) {
//   if (ob.i > largestCt.count) {
//     largestCt.alph = i;
//     largestCt.count = ob[i];
//   }
// }
// console.log(largestCt);
// let strng2 =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thes, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// console.log(strng.length);
// console.log(strng2.slice(10, 30));
// console.log(strng2);
// console.log(strng.splice(30, 40));
// console.log(strng);

// function abc() {
//   let num = 5;
//   return () => {
//     num = num + 1;
//     return num;
//   };
// }

// const newFn = abc();
// console.log(newFn());
// console.log(newFn());
// console.log(newFn());
// console.log(newFn());

// const paland = "malayalam2";
// paland.split("").reverse().join("") === paland ? console.log("It is a palandrom") : console.log("It is not a palandrom");

// const myOb = {
//   name: "Enayet",
// };
// const myOb2 = JSON.parse(JSON.stringify(myOb));

// console.log(myOb2);
// myOb2.name = "jaffer";
// console.log(myOb);
// console.log(myOb2);

// var length = 10;
// function fn() {
//   console.log(this);
//   console.log(this.length);
// }
// fn();
// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();
//     console.log(arguments[1]);
//     arguments[0]();
//   },
// };
// obj.method(fn, 11, 15);

// function abc() {
//   var a = 5;
//   const ob = {
//     name: "Enayet",
//     myFn: function () {
//       console.log(this);
//       console.log(a);
//     },
//   };
//   ob.myFn();
//   console.log(this);
// }

// abc();
// console.log(this);

// console.log(false == "");
// console.log(false == 0);
// console.log(0 == "");

// console.log(null == undefined);
// console.log((false == 0) == (null == undefined));

// function abc(a) {
//   return function (b) {
//     return function () {
//       return a + b;
//     };
//   };
// }

// console.log(abc(3)(8)());

// function a(fn) {
//   setTimeout(() => {
//     console.log("First");
//     fn();
//   }, 2000);
// }
// function b(fn) {
//   setTimeout(() => {
//     console.log("Second");
//     fn();
//   }, 1000);
// }
// function c(fn) {
//   setTimeout(() => {
//     console.log("Third");
//     fn();
//   }, 0);
// }

// a();
// b();
// c();

// a(() => {
//   b(() => {
//     c();
//   });
// });

function Person(name) {
  this.name = name;
}

Person.prototype.newFn = function () {
  console.log("My name is ", this.name);
};
const fPerson = new Person("Enayet");

console.log(fPerson);

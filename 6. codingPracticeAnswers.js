const a = ["Red", "Blue", "Green", "Yellow"];
const b = [123, 234, 354, 456, 465, 5, 4332, 3, 21, 243, 5, 45, 66, 78, 7];

console.log(a.sort());

/*--------- Sorting array for stringa nd number ---------*/
console.log(b.sort((a, b) => a - b));

/*--------- Smallest number in array ---------*/
console.log(b.sort((a, b) => a - b)[0]);

/*--------- Largest number in array ---------*/
console.log(b.sort((a, b) => a - b)[b.length - 1]);

/*--------- Remove duplicate element and make unique elemented array ---------*/
const myArr = [1, 3, 5, 6, 8, 9, 9, 5, 4, 2, 2, 4, 5, 7, 8, 9, 6, 6, 4, 3, 2, 2];
console.log([...new Set(myArr)]);
console.log([...new Set(myArr)][[...new Set(myArr)].length - 1]);

const newArr = [];
for (let i = 0; i < myArr.length; i++) {
  if (!newArr.includes(myArr[i])) {
    newArr.push(myArr[i]);
  }
}
console.log(newArr);

/*--------- Count of alphabet in a string (sentance) ---------*/
const str = "My name is khana and I am not a terrorist";
const strArr = str.toLowerCase().split("");
const ob = {};
strArr.forEach((e) => {
  if (e !== " ") {
    if (!ob[e]) {
      ob[e] = 1;
    } else {
      ob[e] = ob[e] + 1;
    }
  }
});
console.log(ob);

/*--------- Count of highest alphabet repetetion in a string (sentance) ---------*/
let alphabet = "";
let count = 0;
for (let e in ob) {
  if (ob[e] > count) {
    alphabet = e;
    count = ob[e];
  }
}
console.log("result is: ", alphabet, ":", count);

/*--------- Count of 3rd largest alphabet repetetion in a string (sentance) ---------*/
let alpArr = [];
for (let e in ob) {
  alpArr.push(ob[e]);
}
console.log(alpArr);
alpArr = alpArr.sort((a, b) => a - b);
let newAlpArr = [];
alpArr.forEach((e) => {
  if (!newAlpArr.includes(e)) {
    newAlpArr.push(e);
  }
});
const val = newAlpArr[newAlpArr.length - 3];

const newOb = {};
for (let el in ob) {
  if (ob[el] === val) {
    newOb[el] = ob[el];
  }
}

console.log(newOb);

/*--------- Closure ---------*/
function abc() {
  let value = 5;
  return function () {
    console.log(value);
    value--;
  };
}
const newFn = abc();
newFn();
newFn();
newFn();
newFn();
newFn();

/*--------- Palendrom string ---------*/
const checkStr = "malayalam";
checkStr.split("").reverse().join("") === checkStr ? console.log("Ther string is a palendrom") : console.log("Ther string is not a palendrom");

/*--------- Anagram Check ---------*/
// This function checks if two given strings are anagrams of each other (contain the same characters in a different order).
const x = "anagram";
const y = "gramana";

x.split("").sort().join("") === y.split("").sort().join("") ? console.log("Ther string is an anagram") : console.log("Ther string is not an anagram");

/*--------- Fibonacci Series ---------*/
let arr = [0, 1];
function fabSeries(n) {
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
}
fabSeries(15);
console.log(arr);

/*--------- reduce ---------*/
const xArr = [12, 3, 4, 6, 9];
console.log(xArr.reduce((acc, e) => e * acc, 10));

/*--------- Output type question ---------*/
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}

const myFn = (e) => {
  setTimeout(() => console.log(e), e * 1000);
};
for (var i = 0; i < 5; i++) {
  myFn(i);
}

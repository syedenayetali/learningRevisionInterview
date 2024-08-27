// call
const ob1 = { name: "Enayet" };
function myFun(age) {
  console.log("My anme is ", this.name, " and my age is", age);
}
myFun.call(ob1, 28);

// Apply
const ob2 = { name: "Enayet" };
function myFun(age) {
  console.log("My anme is ", this.name, " and my age is", age);
}
myFun.apply(ob2, [28]);

//bind
const ob3 = { name: "Enayet" };
function myFun(age) {
  console.log("My anme is ", this.name, " and my age is", age);
}
const newFn = myFun.bind(ob3, 28);
newFn();

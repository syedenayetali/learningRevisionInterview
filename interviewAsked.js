// You are given an integer array, rotate the array to the right by k steps, where k is non-negative.

// Example: Input: (nums = [1, 2, 3, 4, 5, 6, 7, 8]), (k = 4);

// Output: [5, 6, 7, 8, 1, 2, 3, 4];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const k = 4;
// let newArr = [];
// for (let i = k; i < arr.length; i++) {
//   newArr.push(arr[i]);
// }
// console.log([...newArr, ...arr.slice(0, k)]);

// optimize
// console.log([...arr.slice(k, arr.length), ...arr.slice(0, k)]);

// const ob1 = {
//   name: "Enayet",
//   newOb: {
//     age: 26,
//   },
// };

// const ob2=ob1;  //shallow copy
// const ob2 = JSON.parse(JSON.stringify(ob1)); // deepcopy

// const abc = (ob) => {
// };
// let newOb = {}
//   for(let el in ob){
//     if(!newOb[el]){
//         newOb[el]=el
//     }else{

//     }
//   }

// console.log(abc(ob1));

// const nestedArray = [1, [2, [3, [4, 5]]]];
// Output: [1, 2, 3, 4, 5];
// const newArr = [];

// const cusFun = (val, arr) => {
//   if (val !== Array) {
//     newArr.push(val);
//   }
// };
// for (let i; i < nestedArray.length; i++) {
//   cusFun(i, arr);
// }
// cusFun();
// console.log(newArr);

// const HOC =(comp)=>{

//     retutn <comp prop={data} />
// }

// const ProvidingData = createContext()

// const Component =()=>{
//     return (
//         <ProvidingData data={data}>
//             <Component2 />
//         </ProvidingData>
//     )
// }

// const Component2=()=>{
//     const data = useContext(ProvidingData)
//     return
// }

// <Provide store={store}>
//     <App />
// </Provide>

// You are given an integer array, rotate the array to the right by k steps, where k is non-negative.

// Example:

// const nestedArray = [1, [2, [3, [4, 5]]]];
// Output: [1, 2, 3, 4, 5]
// const nestedArray = [1, [2, [3, [4, 5]]]];
// const newArr = [];
// const myFn = (myArr) => {
//   newArr.push(myArr[0]);
//   if (Array.isArray(myArr[1])) {
//     myFn(myArr[1]);
//   } else {
//     newArr.push(myArr[1]);
//   }
// };

// myFn(nestedArray);
// console.log(newArr);

// Input: nums = [1,2,3,4,5,6,7,8], k = 4
// Output: [5,6,7,8,1,2,3,4]

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 4;
// let newArra = [];
// let l = 0;
// let length = nums.length - 1;
// const checkFn = () => {
//   if (l < k) {
//     newArra.push(nums[l]);
//     l = l + 1;
//     checkFn();
//   } else {
//     newArra.unshift(nums[length]);
//     length = length - 1;
//     length >= k && checkFn();
//   }
// };
// checkFn(nums);
// console.log(newArra);

// // optimize
// console.log([...nums.slice(k, nums.length), ...nums.slice(0, k)]);

//optimize
// let arrLen = nums.length - 1;
// const rotateArr = () => {
//   nums.unshift(nums[nums.length - 1]);
//   nums.pop(nums[nums.length - 1]);
//   k = k + 1;
//   nums.length > k && rotateArr();
// };
// rotateArr();
// console.log(nums);

// const data = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "0",
// ];
// const passw = [];

// const randonAlph = () => {
//   const randVal = Number((Math.random() * 100).toFixed(0));
//   if (randVal > 36) {
//     return randonAlph();
//   } else {
//     return randVal;
//   }
// };

// const randomPassword = (len) => {
//   for (let i = 0; i < len; i++) {
//     randonAlph() % 2 === 0 ? passw.push(data[randonAlph()]) : passw.push(data[randonAlph()].toUpperCase());
//   }
// };

// randomPassword(8);
// console.log(passw.join(""));

// const nestedArray = [1, [2, [3, [4, 5]]]];
//Output: [1, 2, 3, 4, 5]

// const newArr = [];
// const myFun = (arr) => {
//   newArr.push(arr[0]);
//   if (!Number.isInteger(arr[1])) {
//     myFun(arr[1]);
//   } else {
//     newArr.push(arr[1]);
//   }
// };

// myFun(nestedArray);
// console.log(newArr);

const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
];

const pass = [];

// const randVal = +(Math.random() * 100).toFixed(0);

const randFn = () => {
  const randVal = +(Math.random() * 100).toFixed(0);
  if (randVal > chars.length - 1) {
    return randFn();
  } else {
    return randVal;
  }
};

const createPass = (len) => {
  for (let i = 0; i < len; i++) {
    if (randFn() % 2 === 0) {
      pass.push(chars[randFn()]);
    } else {
      pass.push(chars[randFn()].toUpperCase());
    }
  }
};
createPass(20);
console.log(pass.join(""));

// I have a nested array:
// [1, 2, [3, 4, [5, [6]], 7], 8, 9]
// How could I print it in an elegant way to look like this:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const val = [1, 2, [3, 4, [5, [6]], 7], 8, 9];
const newVal = [];
const sagFc = (arr) => {
  arr.map((e) => {
    if (Array.isArray(e)) {
      return sagFc(e);
    } else {
      newVal.push(e);
    }
  });
};

sagFc(val);
console.log(newVal);

// const actionCreator=()=(dispatch)=>{

//     dispatch(type:"TYPE_OF_REDUCER", payload:{})
// }

// >> Reudcer >> Store >> index.js

// index.js

{
  /* <Provider store={   }
    <App />
</Provider> */
}

// const Comp1=()=>{
//     const name="Enayet"
//     useSelector(e=> console.log(e))
//     const dispatch = useDispach()
//     dispatch(actionCreator)
//     return <>
//     <Comp2 name={name} />
//     </>
// }

// const Comp2=({name})=>{
//     return <>
//     <h1>{name}</h1>
//     </>
// }

// const arr = [12,323,434,5,3456,4567,678,768,756,534,,34543,2]

// arr.map(el,id=>
//     <h3 key={id}>{el}</h3>)

// const Form = () => {
//   const name = useRef();
//   const roll = useRef();
//   const email = useRef();
//   const pass = useRef();

//   const submitted = (e) => {
//     e.stopPropogation();
//     if (name.trim("").split("").length > 10) {
//       // do Something/
//     } else {
//       alert("Give name more than 10 chars");
//     }
//   };

//   return (
//     <form submit={submitted}>
//       <lable>Name</lable>
//       <input ref={name} type="text" required />
//       <lable>Roll Number</lable>
//       <input ref={roll} type="number" required />
//       <lable>Email Id</lable>
//       <input ref={email} type="email" required />
//       <lable>Password</lable>
//       <input ref={pass} type="password" required />
//       <button type="submit">Submit Here</button>
//     </form>
//   );
// };

// // high order function
// function abc(fn1) {
//   return fn2;
// }

// // high order component
// const HOC = (Component1) => {
//   return <Componet1 value={value} />;
// };

// const Test = () => {
//   const abc = async () => {
//     // const fetch = await fetch("URL");
//     // const data = await fetch.json();

//     // 1st Way
//     fetch("URL")
//       .then((res) => res.json())
//       .then((data) => setMydata(data))
//       .catch((err) => alert(err));

//     //   2nd way
//     try{

//         if(!response.ok){
//             return new Error()
//         }

//     } catch {

//     }
//   };
//   useEffect(() => {
//     abc();
//   }, []);
//   return <></>;
// };

// console.log(a + 1);
// var a = 5;

const ob1 = {
  name: "Enayet",
};
const ob2 = JSON.parse(JSON.stringify(ob1));
console.log(ob1);
console.log(ob2);
ob1.name = "Enayet 200";
console.log(ob1);
console.log(ob2);

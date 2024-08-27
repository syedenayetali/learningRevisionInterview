function abc() {
  return () => {
    return () => {
      return () => {
        return () => {
          return () => {
            return () => {
              return () => {
                console.log("Enayet");
              };
            };
          };
        };
      };
    };
  };
}

abc()()()()()()()(); //this step is important

const half = (a) => {
  return a / 2;
};

const fifth = (a) => {
  return a / 5;
};

const sum = (a, b) => {
  return a + b;
};

console.log(sum(half(10), fifth(50)));

/////////////////////////////// See this
const add = (a, b) => {
  return a + b;
};
const multiply = (a, b) => {
  return a * b;
};

const myFun = (operation) => {
  return (a) => {
    return (b) => {
      console.log(operation(a, b));
    };
  };
};

myFun(add)(10)(20);
myFun(multiply)(10)(20);

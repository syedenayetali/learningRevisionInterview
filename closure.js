// closure

// a closure gives a function access to its outer scope.
// In JavaScript, closures are created every time a function is created, at function creation time.

const counter = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};

const counter1 = counter();
const counter2 = counter();

counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter2();

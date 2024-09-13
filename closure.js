// closure
// A closure in JavaScript is a function that has access to variables in its parent scope,
// even after the parent function has returned.

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

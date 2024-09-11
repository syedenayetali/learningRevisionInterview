// 1. Palindrome Check
// This function checks if a given string is a palindrome (reads the same forwards and backwards).
const sample = "malayalam";
const rev = sample.split("").reverse().join("");
rev === sample ? console.log("Palindrome Check: True") : console.log("Palindrome Check: False");

// 2. Fibonacci Series
// This function calculates the nth Fibonacci number and prints the Fibonacci series up to n.
const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};

const n = 5;
console.log("Fibonacci Number: ", fibonacci(n));
console.log(
  "Fibonacci Series: ",
  [...Array(n + 1)].map((_, i) => fibonacci(i))
);

// 3. Anagram Check
// This function checks if two given strings are anagrams of each other (contain the same characters in a different order).
const isAnagram = (str1, str2) => {
  const normalize = (str) => str.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
};

const x = "anagram";
const y = "gramana";
console.log(`Anagram Check: The string is ${isAnagram(x, y) ? "an anagram" : "not an anagram"}`);

// 4. Two Sum Problem
// This function finds two indices in an array where the sum of the elements equals the target value.
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const target = 9;
const result = twoSum(newArr, target);
console.log("Two Sum Problem: Locations are :: ", result);

// 5. Stock Buy/Sell Problem
// This function calculates the maximum profit that can be made by buying and selling a stock on different days.
const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

const priceWeek = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(priceWeek);
profit === 0
  ? console.log("Stock Buy/Sell Problem: User cannot make profit in the whole week")
  : console.log(`Stock Buy/Sell Problem: Max profit the user can make is: ${profit}`);

// 6. Closures
// This function demonstrates closures in JavaScript by creating a counter that decrements each time it is called.
const closureCounter = (start) => {
  let a = start;
  return () => {
    console.log("Closure Counter: ", a);
    a--;
  };
};

const counter = closureCounter(5);
counter();
counter();
counter();
counter();
counter();

// 7. DOM Event Listeners
// This section adds event listeners to HTML elements to demonstrate event handling and propagation.
document.querySelector("#divA").addEventListener(
  "click",
  (e) => {
    console.log("DOM Event Listeners: A clicked 👍");
    e.stopPropagation();
  },
  false
);
document.querySelector("#divB").addEventListener(
  "click",
  (e) => {
    console.log("DOM Event Listeners: B clicked 👍");
    e.stopPropagation();
  },
  false
);
document.querySelector("#divC").addEventListener(
  "click",
  (e) => {
    console.log("DOM Event Listeners: C clicked 👍");
    e.stopPropagation();
  },
  false
);

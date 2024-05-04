// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Unknown operation!';
  }
}

// Challenge
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

function switchItUp(number) {
  switch (number) {
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    case 0:
      return 'Zero';
    default:
      return 'Unknown operation.';
  }
}

// Challenge
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      break;
  }
}

// Challenge
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  let classAverage = classPoints.reduce((acc, current) => acc + current) / classPoints.length;
  return classAverage < yourPoints;
}

// Challenge
// Objective: Write a function called capitalizeWords that takes a string as input and returns the same string with the first letter of each word capitalized.

function capitalizeWords(words) {
  return words
    .split(' ')
    .map((item) => item.charAt(words[0]).toUpperCase() + item.slice(1, item.length))
    .join(' ');
}

//console.log(capitalizeWords('hello world')); // Output: "Hello World"

// words.charAt(words[0]).toUpperCase() + words.slice(1, words.length)

// Objective: Write a simple script to display "Hello, JavaScript!" in the console.
function greeting() {
  return 'Hello, JavaScript!';
}

// Objective: Declare two variables, one for your name and one for your age.
// Display them in a sentence using console.log.

function userInput(name, age) {
  return `Hello ${name}, and your age is ${age}.`;
}

// Objective: Calculate the area of a rectangle. Take the length and width from user input and display the area.

function areaOfRectangle(length, width) {
  return length * width;
}

// console.log(areaOfRectangle(8, 3));

// Objective: Write a function that takes a number and returns its square.
function squareOfNumber(number) {
  return number * number;
}

// Write a script that checks if a number is even or odd and prints an appropriate message in the console.
function oddOrEven(number) {
  return number % 2 === 0;
}

// console.log(oddOrEven(4))

// Objective: Use a loop to print all even numbers from 1 to 20.
function looping(number) {
  for (let i = 0; i <= number; i++) {
    console.log(i);
  }
}
function fruits(arrOfFruits) {
  for (let i = 0; i < arrOfFruits.length; i++) {
    console.log(arrOfFruits[i]);
  }
}

// fruits(['apples', 'oranges', 'bannanas', 'citrones', 'kiwis', 'melones', 'katkus'])

// Objective: Create an object representing a car with properties like make, model, and color. Display each property.
let car = [
  {
    key: 'a',
    test: 'b',
  },
];
function items(obj) {
  for (let i = 0; obj.length; i++) {
    console.log(car);
  }
}

function palindrome(word) {
  let forward = word.split('');
  let backwards = word.split('').reverse();

  for (let i = 0; forward.length > i; i++) {
    if (forward[i] !== backwards[i]) {
      return false;
    }
  }
  return true;
}

let myNumbers = [1, 2, 3, 4];
const newNumbers = myNumbers.map((item) => item * item);

let someNumber = [1, 2, 3, 4, 5, 6];
const evenNumbers = someNumber.filter((item) => item % 2 !== 0);

const greaterThan = evenNumbers.map((item) => item * 2).filter((n) => n > 4);

const n2 = [-1, 2, 3, -4, 5];
const n2ResultSum = n2.filter((n) => n > 0).reduce((a, b) => a + b);

n3 = ['apple', 'banana', 'grapefruit', 'kiwi'];
const n3Words = n3.reduce((a, b) => {
  return a.length > b.length ? a : b;
});

const duplicates = [1, 2, 2, 3, 4, 4, 5];

const removedDuplicates = duplicates.filter((value, index, self) => {
  return index === self.indexOf(value);
});

const names = ['alice', 'bob', 'carol'];
const upperNames = names.map((item) => item.substring(0, 1).toUpperCase() + item.substring(1, item.length));
console.log(upperNames);

const sortedValues = removedDuplicates.sort();

function getDivisorsCnt(n) {
  let count = 0;
  if (n === 0) return 1;

  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i == n / i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

console.log(getDivisorsCnt(4));

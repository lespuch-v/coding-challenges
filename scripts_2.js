const objArr = [1, [2, [3, [4]], 5]];

function flattenArr(arrObj) {
  return objArr.flat(Infinity);
}

//console.log(flattenArr(objArr));

const numDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];

function removeDuplications(n) {
  const objSet = new Set([...n]);
  const arr = Array.from(objSet);
  console.log(arr);
}

// removeDuplications(numDuplicates);

const js = 'javascript';

function findAllLetterAccourences(str) {
  const regex = /a/g;

  const accurences = str.match(regex);
  console.log(`Letter: (a) has: ${accurences.length}`);
}

//findAllLetterAccourences(js);

// Challenge 4: Find Oldest Age

// Description:
// You have an array of people with ages [25, 30, 45, 60, 50]. Use a JavaScript method to find the highest age.
// Method Used: Math.max
// Hints:
// Math.max can accept a list of values, but not an array directly.
// Use the spread operator to pass the array as arguments.
// Consider the apply method as an alternative.
// Difficulty: Beginner
// Expected Result:
// 60

const numberOfAges = [25, 30, 45, 60, 50];

function findTheOldest(ageArr) {
  return Math.max(...ageArr);
}

// Calculate Sum of Prices

// Description:
// You have an array of objects representing items with prices:
// js
// Copy code
// [
//   { name: "apple", price: 1.2 },
//   { name: "banana", price: 0.8 },
//   { name: "mango", price: 1.5 }
// ]
// Use a JavaScript array method to calculate the total sum of all prices.
// Method Used: Array.reduce
// Hints:
// The reduce method accumulates values based on a reducer function.
// Start with an initial accumulator value of 0.
// Extract the price value from each object to add to the accumulator.
// Difficulty: Intermediate
// Expected Result:
// 3.5

const shoppingCard = [
  { name: 'apple', price: 1.2 },
  { name: 'banana', price: 0.8 },
  { name: 'mango', price: 1.5 },
];

function calculatePrices(objArr) {
  return objArr.reduce((sum, item) => sum + item.price, 0);
}

// console.log(calculatePrices(shoppingCard));

const welcome = 'Welcome to JavaScript programming';

function countTheNumberOfWords(str) {
  return str.split(' ').length;
}

// console.log(countTheNumberOfWords(welcome));

const arr1 = [1, 4, 7];
const arr2 = [2, 3, 6];

function mergetAndSortedArr(arr1, arr2) {
  return arr1.concat(arr2).sort();
}

// console.log(mergetAndSortedArr(arr1, arr2));

const cars = [
  { make: 'Toyota', model: 'Camry' },
  { make: 'Honda', model: 'Accord' },
  { make: 'Toyota', model: 'Corolla' },
];

function getUniqueValues(obj) {
  const make = obj.map((item) => item.make);
  const makeSet = new Set([...make]);
  const resultArray = Array.from(makeSet);
  return resultArray;
}

// console.log(getUniqueValues(cars));

const str = '';
const nameObj = { name: 'John' };

function testtestj(str, name) {

}

// console.log(testtest(str, nameObj));

const books = [
  { titleTest: 'A Tale of Two Cities', newYear: 1859 },
  { title: 'Moby Dick', year: 1851 },
  { title: 'War and Peace', year: 1869 },
];

function sortBooks(obj) {
  return obj.sort((a, b) => a.year - b.year);
}

// console.log(sortBooks(books));

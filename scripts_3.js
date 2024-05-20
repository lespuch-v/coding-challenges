// Sum of Two Numbers
// Description: Write a function that takes two numbers and returns their sum.
//
//     Method Naming Tip: Use a name like sumTwoNumbers.
//     Expected Result: sumTwoNumbers(3, 5) should return 8.
// Useful Tip: Make sure to handle edge cases such as negative numbers and zero.

function sumTwoNumbers(n1, n2) {
  if (typeof n1 == 'number' && typeof n2 == 'number') {
    return n1 + n2;
  } else {
    return 'not a number';
  }
}

// console.log(sumTwoNumbers(3, 123));
// console.log(sumTwoNumbers(-3, 7));
// console.log(sumTwoNumbers(0, 5)); // Expected output: 5
// console.log(sumTwoNumbers(0, 0)); // Expected output: 0
// console.log(sumTwoNumbers("3", 4)); // Expected output: 'not a number'
// console.log(sumTwoNumbers(3, "4")); // Expected output: 'not a number'
// console.log(sumTwoNumbers("3", "4")); // Expected output: 'not a number'

// Palindrome Checker
// Description: Create a function that checks whether a given string is a palindrome.
//
//     Method Naming Tip: Use a name like isPalindrome.
//     Expected Result: isPalindrome("racecar") should return true.
//     Useful Tip: Consider ignoring case sensitivity and non-alphanumeric characters.

function isPalindrome(word) {
  const forward = word.toLocaleLowerCase();
  const backward = word.split('').reverse().join('').toLowerCase();

  return forward === backward;
}

// console.log(isPalindrome('hello'))
// console.log(isPalindrome('hannah'))

// Factorial Calculator
// Description: Write a function to calculate the factorial of a non-negative integer.
//
//     Method Naming Tip: Use a name like calculateFactorial.
//     Expected Result: calculateFactorial(5) should return 120.
// Useful Tip: Use recursion or iteration to solve this problem.

function calculateFactorial(number) {
  if (!number) return 1;

  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}
// console.log(calculateFactorial(100))
// console.log(calculateFactorial(5))
// console.log(calculateFactorial(483218))
// console.log(calculateFactorial(-7890))

// Description: Create a function that prints numbers from 1 to 100. For multiples of three, print "Fizz"
// instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
//
//     Method Naming Tip: Use a name like fizzBuzz.
//     Expected Result: fizzBuzz() should print the sequence accordingly.
//     Useful Tip: Use modulo operator % to determine divisibility.

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    }
  }
}

// fizzBuzz()

// 5. Reverse a String
// Description: Write a function that reverses a given string.
//
//     Method Naming Tip: Use a name like reverseString.
//     Expected Result: reverseString("hello") should return "olleh".
//     Useful Tip: Consider using built-in JavaScript methods like split(), reverse(), and join().

function reverseString(str) {
  // if str is type of string then execute the if block
  if (typeof str === 'string') {
    // split string into char array -> reverse the char array and join it back together.
    return str.split('').reverse().join('');
  }
  return 'not a valid string';
}
// console.log(reverseString('hello world and how are you?'))

// Find Maximum in Array
// Description: Write a function that finds the maximum value in an array of numbers.
//
//     Method Naming Tip: Use a name like findMax.
//     Expected Result: findMax([1, 5, 3, 9, 2]) should return 9.
// Useful Tip: Use Math.max with the spread operator ....

function findMax(arrNum) {
  return Math.max(...arrNum);
}

// Remove Duplicates from Array
// Description: Create a function that removes duplicates from an array.
//
//     Method Naming Tip: Use a name like removeDuplicates.
//     Expected Result: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) should return [1, 2, 3, 4, 5].
//     Useful Tip: Use a Set to handle duplicates efficiently.
//

function removeDuplicates(myArray) {
  return [...new Set(myArray)];
}

// console.log(removeDuplicates([1,1,2,2,3,5,4,8,9,10]))

// Find Maximum in Array
// Description: Write a function that finds the maximum value in an array of numbers.
//
//     Method Naming Tip: Use a name like findMax.
//     Expected Result: findMax([1, 5, 3, 9, 2]) should return 9.
// Useful Tip: Use Math.max with the spread operator ....

function findMax(numArray) {
  return Math.max(...numArray);
}

// console.log(findMax([0,1,2,37,4,5,6,7,8,9,1]))

// Fibonacci Sequence Generator
// Description: Write a function that generates the first n numbers in the Fibonacci sequence.
//
//     Method Naming Tip: Use a name like generateFibonacci.
//     Expected Result: generateFibonacci(5) should return [0, 1, 1, 2, 3].
//     Useful Tip: Use an iterative approach to avoid stack overflow in recursion.

function generateFibonacci(number) {
  if (number === 0) return [];
  if (number === 1) return [1];
  const resultFib = [0, 1];

  for (let i = 2; i < number; i++) {
    let nextFib = resultFib[i - 1] + resultFib[i - 2];
    resultFib.push(nextFib);
  }

  return resultFib;
}

// console.log(generateFibonacci(5));

// Check for Anagram
//     Description: Create a function that checks if two strings are anagrams of each other.
//
//     Method Naming Tip: Use a name like isAnagram.
//     Expected Result: isAnagram("listen", "silent") should return true.
//     Useful Tip: Sort the characters of both strings and compare the results.

function isAnagram(firstWord, secondWord) {
  const f1 = firstWord.split('').sort().join();
  const f2 = secondWord.split('').sort().join();

  if (f1.length !== f2.length) return false;

  return f1 === f2;
}

// console.log(isAnagram('listen', 'silent'));

// Flatten Nested Arrays
// Description: Write a function that flattens a nested array.

// Method Naming Tip: Use a name like flattenArray.
// Expected Result: flattenArray([1, [2, [3, [4]], 5]]) should return [1, 2, 3, 4, 5].
// Useful Tip: Use recursion or Array.prototype.flat() method.
// Feel free to ask for more details or additional challenges! What are your thoughts on these

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// console.log(flattenArray([1, [2, [3, [4]], 5]]));


// Count Vowels in a String
// Description: Write a function that counts the number of vowels in a given string.

// Method Naming Tip: Use a name like countVowels.
// Expected Result: countVowels("hello") should return 2.
// Useful Tip: Consider using a regular expression to match vowels.

function countVowels(word){
    // const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    // let count = 0;
    // const wordToChar = word.toLocaleLowerCase().split('');

    // for(let i = 0; i < wordToChar.length; i++){
    //     if(vowels.includes(wordToChar[i])){
    //         count++
    //     }
    // }
    // return count

    const matches = word.match(/[aeiouy]/gi)
    return matches ? matches.length : 0
}

console.log(countVowels('hello'))
console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Michael!"', helloName('Michael'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
  // return firstNumber + secondNumber;
console.log('Test - adding 2 + 2:', addNumbers(2, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - multiplying 2 x 3 x 4:', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if (number > 0) {
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
    }
  return 'undefined';
}
console.log('The last item in my array is:', getLast(['hockey', 'soccer', 'golf']));
console.log('Should return undefined:', getLast([]));


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
console.log('Test - should say true:', find(56, [0, 44, 33, 56]));
console.log('Test - should say false:', find(56, [12, 14, 57, 99]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0)) {
  return true;
}
return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numberArray) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < numberArray.length; i++) {
    sum+=numberArray[i];
  }
  return sum;
}
console.log('Total sum of numberArray, should be 16:', sumAll([1, 3, 5, 7]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function inputArray(positiveArray) {
  let firstArray = [];
  for (let i = 0; i < positiveArray.length; i++) {
    if (positiveArray[i] > 0) {
      firstArray.push(positiveArray[i]);
      }
    }
    return firstArray;
}
console.log('Test - should say 4, 6, 55:', inputArray([-1, -3, -2, 4, 6, 55]));
console.log('Test - should say []:', inputArray([-2, -5, -11]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// Problem from Edabit: write a function that takes an integer minutes and
// converts it to seconds.
function minutesToSeconds(minutes) {
  let seconds = minutes * 60;
  return seconds;
}
console.log('Test - converting 10 minutes to seconds:', minutesToSeconds(10));

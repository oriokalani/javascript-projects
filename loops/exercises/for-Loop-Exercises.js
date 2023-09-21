
//TODO: Exercise #1: Construct for loops that accomplish the following tasks:
/*
  a. Print the numbers 0 - 20, one number per line.
  b. Print only the ODD values from 3 - 29, one number per line.
  c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). 
*/
//TODO: Exercise #2: 
/*
  Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

  Construct ``for`` loops to accomplish the following tasks:
    a. Print each element of the array to a new line.
    b. Print each character of the string - in reverse order - to a new line. 
  */
//TODO: Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
/* 
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. 
*/

//! Exercise #1:
// a.
for (let i = 0; i <= 20 ; i ++) {
  console.log(i);
}
// b.
for (let i = 0; i <= 20 ; i ++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// c.
for (let i = 12; i >= -14; i --) {
  console.log(i);
}
// d.
for (let i = 50; i >= 20; i --) {
  if (i % 3 === 0 ) {
    console.log(i);
  }
}

//! Exercise #2:
let string = 'LaunchCode';
let array = [1, 5, 'LC101', 'blue', 42];
// a. Print each array element to a new line
for (i = 0; i <= array.length; i ++) {
  console.log(array[i]);
}
// b. Print each array element to a new line in REVERSE ORDER
for (i = array.length -1; i >= 0; i --) {
  console.log(array[i]);
}

//! Exercise #3:
// a. I added decimals to the array - they should not print
let numbersArray = [2, 2.2, 3.3, 4.4, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenNumbers = [];
let oddNumbers = [];
// b.
for (i = 0; i <= numbersArray.length; i ++) {
  const valueAtIndex = numbersArray[i];
  //* Trying to end loop so I don't get undefined - FIXED when added `Number.isInteger()` method
  if (numbersArray[i] > numbersArray[numbersArray.length -1]) {
    break;
  }
  // EVEN number && checks if the number in the array is an integer
  if (Number.isInteger(numbersArray[i]) && numbersArray[i] % 2 === 0) {
    evenNumbers.push(valueAtIndex);
  }
  // ODD number && checks if the number in the array is an integer
  if (Number.isInteger(numbersArray[i]) && numbersArray[i] % 2 !== 0) {

    oddNumbers.push(valueAtIndex); 
  }
}
console.log(evenNumbers);
console.log(oddNumbers);
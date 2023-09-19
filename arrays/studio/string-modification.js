const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let sliceString = str.slice(0, 3);
let modifiedString = str.slice(3) + sliceString;
console.log(modifiedString);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(); // spacer

let message = `Original String: ${sliceString}\nNew String: ${modifiedString}`;
console.log(message);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
console.log(); // spacer

let userInput = Number(input.question('How many letters do you want to relocate? '));
userSlice = str.slice(0, userInput);
userNewStr = str.slice(userInput) + userSlice;
// console.log(userNewStr);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
console.log(); // spacer

if (userInput <= 0 || userInput > str.length) {
    console.log(`Input must be between 1 -  ${str.length}`);
} else {
    console.log(userNewStr);
}
let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let lengthOfNum = String(num).length;
console.log(lengthOfNum);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45;
let numLength = String(num).replace('.' , '').length;
console.log(numLength);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let number = 867.5309;
let numberLength = '';
if (String(number).indexOf('.') > 0) {
    numberLength = String(number).replace('.' , '').length;
    console.log(numberLength);
} else {
    numberLength = String(number).length;
    console.log(numberLength);
}
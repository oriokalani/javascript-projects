//Create an anonymous function and set it equal to a variable.
let anonymous = (num) => {
    let tripledValue = num * 3;
    if (typeof num === "number") {
        return tripledValue;
    } else if (typeof num === "string") {
        return 'ARRR!';
    } else {
        return num;
    }
}
console.log(anonymous(5));
console.log(anonymous("this is a string"));
console.log(anonymous());

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your function and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let mapAnonymous = (arr) => {
    let timesThree = (n) => {
        if (typeof n === "number") {
            return n * 3;
        }
        if (typeof n === "string") {
            return "ARRR!";
        }
        if (typeof n === "NaN") {
            return n;
        }
    }
    let tripled = arr.map(timesThree);
    
    return tripled;
}
let arr = ['Elocution', 21, 'Clean teeth', 100];

console.log(mapAnonymous(arr));

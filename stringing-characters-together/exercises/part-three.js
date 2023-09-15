//Part Three section one

let language = 'JavaScript';

let sliceJS = language.slice(0 ,1) + language.slice(4, 5);
let messageJavaScriptIsJS = `The abbreviation for '${language}' is '${sliceJS}'.`;
//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(sliceJS);

//2. Without using slice(), use method chaining to accomplish the same thing.

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(messageJavaScriptIsJS);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let capitalT = notTitleCase.charAt(0).toUpperCase();
let capitalC = notTitleCase.charAt(notTitleCase.indexOf(' ') + 1).toUpperCase();
let replaceT = (notTitleCase.replace(notTitleCase.charAt(0), capitalT));
let replaceC = (notTitleCase.replace(notTitleCase.charAt(notTitleCase.indexOf(' ', notTitleCase.indexOf(' ') + 1)), capitalC));
console.log(capitalT);
console.log(capitalC);
console.log(replaceT);
console.log(replaceC);
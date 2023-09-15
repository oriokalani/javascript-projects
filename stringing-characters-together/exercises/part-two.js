//Part Two Section One
console.log();
console.log('----- Section 01 -----');
//

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna);
//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.
let dnaTrim = dna.trim();
console.log(dnaTrim);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
let dnaUpperCase = dna.toUpperCase();
console.log(dnaUpperCase);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.
dna = dna.trim().toUpperCase();
console.log(dna);

//Part Two Section Two
console.log();
console.log('----- Section 02 -----');
//

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
let dnaReplace = dnaTwo.replace('GCT', 'AGG');
let dnaTwoSlice = dnaTwo.slice(16, 19);
let dnaMessageLength = `The DNA strand is ${dnaTwo.length} characters long.`;
let taco = ((dnaTwo.slice(4, 7)).toLowerCase() + 'o');
let cat = dnaTwo.slice(dnaTwo.indexOf('CAT'), dnaTwo.indexOf('CAT') + 3).toLowerCase();
let funWithMethods = `${taco} ${cat}`;
//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log(dnaReplace);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found"
if (dnaTwo.indexOf('CAT') > 0) {
    console.log('CAT gene found');
} else {
    console.log('CAT gene NOT found')
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(`The fifth gene is: '${dnaTwoSlice}'`);

//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(dnaMessageLength);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(funWithMethods);
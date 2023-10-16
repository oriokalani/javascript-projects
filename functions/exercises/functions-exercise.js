//TODO: makeLine(size) function
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}
console.log(makeLine(5));
// BREAK
console.log();

//TODO: makeSquare(size) function
function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++)
        if (i < size) {
            square += makeLine(size) + '\n';
        }
    return square.slice(0, -1);
}
console.log(makeSquare(5));
// BREAK
console.log();

//TODO: makeRectangle(width, height) function
function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));
// BREAK
console.log();

//TODO: makeDownwardStairs(height) function
// Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1) + '\n';
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));
// BREAK
console.log();

//TODO: makeSpaceLine(numSpaces, numChars) function
// Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    let chars = '';
    let spaceLine = '';

    for (let i = 0; i < numSpaces; i ++) {
        spaces += ' ';
    }
    for (let i = 0; i < numChars; i ++) {
        chars += '#';
    }
    spaceLine = `${spaces}${chars}${spaces}`;
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));
// BREAK
console.log();

//TODO: makeIsoscelesTriangle(height) function
// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

//TODO: makeDiamond(height) function
// Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
//! Still needs work
function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

function makeDiamond(height) {
    let diamond = '';
    makeIsoscelesTriangle(height);
    return diamond.slice(0, -1);
}
console.log(makeDiamond(5));
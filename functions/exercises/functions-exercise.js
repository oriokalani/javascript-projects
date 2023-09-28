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
console.log(makeRectangle(5));
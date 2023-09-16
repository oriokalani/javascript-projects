let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log('--- Step 01 ---');

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log('ANSWER: `concat` does not alter the original array');
//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log();
console.log('--- Step 02 ---');

console.log(holdCabinet1.slice(0, 2));
console.log(holdCabinet2.slice(0, 2));
console.log(holdCabinet1);
console.log(holdCabinet2);
console.log('ANSWER: `slice` does not alter the original array');
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log();
console.log('--- Step 03 ---');

console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());
console.log(holdCabinet1);
console.log(holdCabinet2);
console.log('ANSWER: `reverse` and `sort` alter the original array');
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

console.log('--- Original Array ---');
console.log(cargoHold);

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
console.log('--- Step 01 ---');

cargoHold[cargoHold.indexOf('slinky')] = 'space tether';
console.log(cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log('--- Step 02 ---');

console.log(cargoHold.pop());
console.log(cargoHold);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log('--- Step 03 ---');

console.log(cargoHold.shift());
console.log(cargoHold);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
console.log('--- Step 04 ---');

cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);

//5) Use a template literal to print the final array and its length.
console.log('--- Step 05: Message ---');
let message = `Final Array:\n${cargoHold}\nArray Length: ${cargoHold.length}`;

console.log(message);
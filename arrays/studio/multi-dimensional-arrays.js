const input = require('readline-sync') ;

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();
let cargoHold = [ foodArray, equipmentArray, petsArray, sleepAidsArray ];
let userSelectCabinet = Number(input.question(`First, choose a Cabinet.\nEnter a number between 0-${cargoHold.length - 1}: `));
let cabinetMessage = `The cabinet you selected:\n${cargoHold[userSelectCabinet]}`;
let userSelectItem = input.question('Second, choose an Item.\nPlease search for an item in your Cabinet: ').toLowerCase();
let itemMessage = `FOUND IT! Here are your ${userSelectItem}`;
let cabinetMessageError = `ERROR: Please enter a number between 0-${cargoHold.length - 1}`;
let itemMessageError = `Cabinet ${cargoHold[userSelectCabinet]} DOES NOT contain ${itemMessage}`;

// console.log(foodArray);
// console.log(equipmentArray);
// console.log(petsArray);
// console.log(sleepAidsArray);
// console.log(cargoHold)
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
// cargoHold Line 13
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
// userSelectCabinet Line 14
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error cabinetMessage.
// cabinetMessage Line  15
if (userSelectCabinet < 0 || userSelectCabinet > cargoHold.length) {
    console.log(cabinetMessageError);
} else {
    console.log(cabinetMessage);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (cargoHold[userSelectCabinet].includes(userSelectItem)) {
    console.log(itemMessage);
} else {
    console.log(itemMessageError);
}

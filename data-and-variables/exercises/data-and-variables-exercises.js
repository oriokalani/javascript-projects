// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMPH = 17500;
let kilometersToMars = 225000000;
let kilometersToMoon = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMPH));
console.log(typeof(kilometersToMars));
console.log(typeof(kilometersToMoon));
console.log(typeof(milesPerKilometer));

// Calculate a space mission below
let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMPH;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
let messageTripToMars = shuttleName + " will take " + daysToMars + " days to Mars.";

console.log(messageTripToMars);
// Calculate a trip to the moon below
let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
let messageTripToMoon = shuttleName + " will take " + daysToMoon + " days to reach the Moon.";

console.log(messageTripToMoon);
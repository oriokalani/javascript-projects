// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = 'clear';
let preparedForLiftOff = true;

// Initializing variables for CONSOLE message
let messageLaunchSequence = 'All systems are a go! Initiating space shuttle launch sequence.';
let divider = '---------------------------------------------------------------';
let messageDate = `Date: ${date}`;
let messageTime = `Time: ${time}`;
let messageAstronautCount = `Astronaut Count: ${astronautCount}`;
let messageCrewMass = `Crew Mass: ${crewMassKg} kg`;
let messageFuelMass = `Fuel Mass: ${fuelMassKg} kg`;
let messageShuttleMass = `Shuttle Mass: ${shuttleMassKg} kg`;
let messageTotalMass = `Total Mass: ${totalMassKg} kg`;
let messageFuelTemperature = `Fuel Temperature: ${fuelTempCelsius} C`;
let messageWeatherStatus = `Weather Status: ${weatherStatus}`;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
// add logic below to verify all astronauts are ready
// add logic below to verify the total mass does not exceed the maximum limit of 850000
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
// add logic below to verify the fuel level is at 100%
// add logic below to verify the weather status is clear

/*
if (astronautCount <= 7) {
    astronautStatus = 'ready';
} else {
    astronautStatus = 'not ready';
}
if (totalMassKg < maximumMassLimit) {
    astronautCount = 'ready';
} else {
    astronautStatus = 'not ready';
}
if (fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp) {
    astronautCount = 'ready';
} else {
    astronautStatus = 'not ready';
}
if (fuelLevel === 100) {
    astronautCount = 'ready';
} else {
    astronautStatus = 'not ready';
}
if (weatherStatus === 'clear') {
    astronautCount = 'ready';
} else {
    astronautStatus = 'not ready';
}
*/

// REFACTORED `if / else` statements to `inverted if` statements
/*
if (!(astronautCount <= 7)) {
    astronautStatus = !'ready';
}
if (!(totalMassKg < maximumMassLimit)) {
    astronautStatus = !'ready';
}
if (!(totalMassKg < maximumMassLimit)) {
    astronautStatus = !'ready';
}
if (!(fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp)) {
    astronautStatus = !'ready';
}
if (!(fuelLevel === 100)) {
    astronautStatus = !'ready';
}
if (!(weatherStatus === 'clear')) {
    astronautStatus = !'ready';
}
*/

// SINGLE-LINE `inverted if` statements
// console.log to check astronautStatus after each if statement

if (!(astronautCount <= 7)) {astronautStatus = !'ready';}
console.log(astronautStatus);
if (!(totalMassKg < maximumMassLimit)) {astronautStatus = !'ready';}
console.log(astronautStatus);
if (!(totalMassKg < maximumMassLimit)) {astronautStatus = !'ready';}
console.log(astronautStatus);
if (!(fuelTempCelsius > minimumFuelTemp || fuelTempCelsius < maximumFuelTemp)) {astronautStatus = !'ready';}
console.log(astronautStatus);
if (!(fuelLevel === 100)) {astronautStatus = !'ready';}
console.log(astronautStatus);
if (!(weatherStatus === 'clear')) {astronautStatus = !'ready';}
console.log(astronautStatus);


// CONSOLE OUTPUT
console.log(messageLaunchSequence);
console.log(divider);
console.log(messageDate);
console.log(messageTime);
console.log(messageAstronautCount);
console.log(messageCrewMass);
console.log(messageFuelMass);
console.log(messageShuttleMass);
console.log(messageTotalMass);
console.log(messageFuelTemperature);
console.log(messageWeatherStatus);
console.log(divider);
// CONDITIONAL Message
if (astronautStatus === 'ready') {
    console.log('Have a safe trip astronauts!');
} else {
    console.log('ABORT: Shut down launch operations!');
}

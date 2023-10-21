//TODO: Textbook Link: https://education.launchcode.org/intro-to-web-dev-curriculum/objects-and-math/exercises/index.html

let superChimpOne = {
   animalName: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   animalName: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let chimpTwo = {
   animalName: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   animalName: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let alien = {
   animalName: 'Almina',
   species: 'Tardigrade',
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, chimpTwo, dog, alien];

function crewReports(animal) {
   return `${animal.animalName} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

//console.log(crewReports(crew[4]));

//TODO: Part 3: Crew Fitness 

function fitnessTest(participants) {
   let results = [], numSteps, turns;
   for (let i = 0; i < participants.length; i ++) {
      numSteps = 0;
      turns = 0;
      while (numSteps < 20) {
         numSteps += participants[i].move();
         turns ++;
      }
      results.push(`${participants[i].animalName} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest(crew));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
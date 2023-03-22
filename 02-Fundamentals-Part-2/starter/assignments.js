/*
// FUNCTIONS
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const croatia = describeCountry('Croatia', 3.8, 'Zagreb');
console.log(croatia);

const spain = describeCountry('Spain', 47.42, 'Madrid');
console.log(spain);

const england = describeCountry('England', 55.98, 'London');
console.log(england);


// FUNCTION DECLARATIONS VS. EXPRESSIONS
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china1 = percentageOfWorld1(1441);
const croatia1 = percentageOfWorld1(3.8);
const spain1 = percentageOfWorld1(47.42);
// console.log(china1, croatia1, spain1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const china2 = percentageOfWorld2(1441);
const croatia2 = percentageOfWorld2(3.8);
const spain2 = percentageOfWorld2(47.42);
// console.log(china2, croatia2, spain2);


// ARROW FUNCTIONS
const percentageOfWorld3 = population => (population / 7900) * 100;
const china3 = percentageOfWorld3(1441);
const croatia3 = percentageOfWorld3(3.8);
const spain3 = percentageOfWorld3(47.42);
// console.log(china3, croatia3, spain3);


// FUNCTIONS CALLING OTHER FUNCTIONS
const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`

// console.log(describePopulation('Croatia', 3.8));
// console.log(describePopulation('Spain', 47.42));
// console.log(describePopulation('China', 1441));


// INTRODUCTION TO ARRAYS
const populations = [3.8, 47.42, 83.2, 1441]; // -> in millions

// console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);


// BASIC ARRAY OPERATIONS (METHODS)
const neighbours = ['Slovenia', 'Hungary', 'Serbia', 'Bosnia and Herzegovina', 'Montenegro', 'Italy'];
// console.log(neighbours);

neighbours.push('Utopia');
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//   console.log('Probably not a central European country :D');
// }
 
neighbours[neighbours.indexOf('Hungary')] = 'Republic of Hungary';
// console.log(neighbours);


// INTRODUCTION TO OBJECTS
// const myCountry = {
//   country: 'Croatia',
//   capital: 'Zagreb',
//   language: 'croatian',
//   population: 3.8,
//   neighbours: ['Slovenia', 'Hungary', 'Serbia', 'Bosnia and Herzezgovina', 'Montenegro', 'Italy']
// };

// DOT VS. BRACKET NOTATION
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population = myCountry.population + 2;
// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] = myCountry['population'] - 2;
// myCountry['population'] -= 2;
// console.log(myCountry.population);


// OBJECT METHODS
const myCountry = {
  country: 'Croatia',
  capital: 'Zagreb',
  language: 'croatian',
  population: 3.8,
  neighbours: ['Slovenia', 'Hungary', 'Serbia', 'Bosnia and Herzezgovina', 'Montenegro', 'Italy'],
  describe: function() {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length > 0 ? false : true;
    // this.isIsland = this.neighbours.length === 0 ? true : false;
    // this.isIsland = !Boolean(this.neighbours.length);
  }
};

// myCountry.describe();
myCountry.checkIsland();
// console.log(myCountry);


// ITERATION: THE FOR LOOP
// for (let vote = 1; vote <= 50; vote++) {
//   console.log(`Voter number ${vote} is currently voting`);
// }


// LOOPING ARRAYS, BREAKING AND CONTINUING
// const populations = [3.8, 47.42, 83.2, 1441]; // -> in millions
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/
const country = 'Croatia';
const continent = 'Europe';
let population = 3900000;
const isIsland = false;
let language;
let description;

// console.log(country);
// console.log(continent);
// console.log(population);


// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

language = 'croatian';
//country = 'England';

//population++;
//console.log(population);

//description = country + ' is in ' + continent + ', and its ' + population/1000000 + ' million people speak ' + language;
description = `${country} is in ${continent}, and its ${population/1000000} million people speak ${language}.`
//console.log(description);

// if (population > 33000000) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(`${country}'s population is ${Math.floor((33000000 - population)/1000000)} million below average.`);
// }

// console.log('9' - '5'); // prediction: 4, correct answer: 4
// console.log('19' - '13' + '17');  // prediction: '617', correct answer: '617'
// console.log('19' - '13' + 17);  // prediction: 617, correct answer: 23
// console.log('123' < 57);  // prediction: false, correct answer: false
// console.log(5 + 6 + '4' + 9 - 4 - 2); //prediction: 1143, correct answer: 1143

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// console.log(numNeighbours);

// const isEnglishLanguage = language === 'english';
// const isPopulationLessThan50Million = population < 50000000;

// if (isEnglishLanguage && isPopulationLessThan50Million && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// switch(language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;
//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('Number 4');
//     break;
//   case 'arabic':
//     console.log('5th most spoken language');
//     break;
//   default:
//     console.log('Great language too :D');
// }

// population > 33000000 ? console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is below average.`) -> solution
// console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average.`);  // -> better solution
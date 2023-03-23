/*
// ACTIVATING STRICT MODE
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


// FUNCTIONS
function logger() {
  console.log('My name is Max');
}

// calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


// FUNCTION DECLARATIONS VS. EXPRESSIONS
// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1998);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
}
const age2 = calcAge2(1998);

console.log(age1, age2);


// ARROW FUNCTIONS
// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Max'));
console.log(yearsUntilRetirement(1980, 'Bob'));


// FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1998, 'Max'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// CODING CHALLENGE #1
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

// Test data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Doplhins win (${avgDolphins} vs. ${avgKoalas}).`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`)
  } else {
    console.log('No team wins!');
  }
};

checkWinner(avgDolphins, avgKoalas);

// Test data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);


// INTRODUCTION TO ARRAYS
const friend1 = 'Max';
const friend2 = 'Marko';
const friend3 = 'Luka';

const friends = ['Max', 'Marko', 'Luka'];
console.log(friends);

const y = new Array(1998, 1994, 2006, 2023);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Josip';
console.log(friends);
// friends = ['Jure', 'Anita']; -> can't do

const firstName = 'Max';
const max = [firstName, 'Lončar', 2023 - 1998, 'developer', friends];
console.log(max);
console.log(max.length);


// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
}

const years = [1990, 1998, 2005, 2020, 2017];

console.log(calcAge(years)); // -> NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// BASIC ARRAY OPERATIONS (METHODS)
const friends = ['Max', 'Marko', 'Luka'];
// Add elements
const newLength = friends.push('Josip');
console.log(friends);
console.log(newLength);

friends.unshift('Ivan');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Marko'));
console.log(friends.indexOf('Boris'));

friends.push(23);
console.log(friends.includes('Marko'));
console.log(friends.includes('Boris'));
console.log(friends.includes(23));

if (friends.includes('Max')) {
  console.log('You have a friend called Max');
}


// CODING CHALLENGE #2
// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

// Test data
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// Bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];
console.log(bills, tips, total);


// INTRODUCTION TO OBJECTS
const maxArray = [
  'Max',
  'Lončar',
  2023 - 1998,
  'developer',
  ['Kristijan', 'Stjepan', 'Tomislav']
];

const max = {
  firstName: 'Max',
  lastName: 'Lončar',
  age: 2023 - 1998,
  job: 'developer',
  friends: ['Kristijan', 'Stjepan', 'Tomislav']
};


// DOT VS. BRACKET NOTATION
const max = {
  firstName: 'Max',
  lastName: 'Lončar',
  age: 2023 - 1998,
  job: 'developer',
  friends: ['Kristijan', 'Stjepan', 'Tomislav']
};

console.log(max);

console.log(max.lastName);
console.log(max['lastName']);

const nameKey = 'Name';
console.log(max['first' + nameKey]);
console.log(max['last' + nameKey]);

// console.log(max.'last' + nameKey]) -> not working

const interestedIn = prompt('What do you want to know about Max? Choose between firstName, lastName, age, job, and friends');

if (max[interestedIn]) {
  console.log(max[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

max.location = 'Croatia';
max['twitter'] = '@maxloncar';
console.log(max);

// Challenge
// "Max has 3 friends, and his best friend is called Stjepan"
console.log(`${max.firstName} has ${max.friends.length} friends, and his best friend is called ${max.friends[1]}`);


// OBJECT METHODS
const max = {
  firstName: 'Max',
  lastName: 'Lončar',
  birthYear: 1998,
  job: 'developer',
  friends: ['Kristijan', 'Stjepan', 'Tomislav'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2023 - birthYear;
  // }

  // calcAge: function() {
  //   // console.log(this); 
  //   return 2023 - this.birthYear; // use "this" beacuse of DRY principle
  // }

  calcAge: function() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  }
};

// console.log(max.calcAge(1998));
// console.log(max['calcAge'](1998));

console.log(max.calcAge());

console.log(max.age);
console.log(max.age);
console.log(max.age);

// Challenge
// "Max is a 25-year old developer, and he has a/no driver's license"
console.log(max.getSummary());


// CODING CHALLENGE #3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
} else if (john.BMI > mark.BMI) {
  console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}


// ITERATION: THE FOR LOOP
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


// LOOPING ARRAYS, BREAKING AND CONTINUING
const max = [
  'Max',
  'Lončar',
  2023 - 1998,
  'developer',
  ['Kristijan', 'Stjepan', 'Tomislav'],
  true
];
const types = [];

// console.log(max[0]);
// console.log(max[1]);
// ...
// console.log(max[4])
// max[5] does NOT exis

for (let i = 0; i < max.length; i++) {
  // Reading from max array
  console.log(max[i], typeof max[i]);

  // Filling types array
  // types[i] = typeof max[i];
  types.push(typeof max[i]);
}

console.log(types);

const years = [1998, 2008, 1968, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// Continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < max.length; i++) {
  if (typeof max[i] !== 'string') continue;
  console.log(max[i], typeof max[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < max.length; i++) {
  if (typeof max[i] === 'number') break;
  console.log(max[i], typeof max[i]);
}


// LOOPING BACKWARDS AND LOOPS IN LOOPS
const max = [
  'Max',
  'Lončar',
  2023 - 1998,
  'developer',
  ['Kristijan', 'Stjepan', 'Tomislav'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = max.length - 1; i >= 0; i--) {
  console.log(i, max[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}


// THE WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end...');
}
*/
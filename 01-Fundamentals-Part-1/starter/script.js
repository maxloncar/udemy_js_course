/*
//VALUES AND VARIABLES
let js = 'amazing';
console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM'
let $function = 27;

let person = 'jonas'
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teaacher';

console.log(myFirstJob);


//DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


//LET, CONST AND VAR
let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1991;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Loncar';
console.log(lastName);


// BASIC OPERATORS
// Math operators
const now = 2045;
const ageMax = now - 1982;
const ageSarah = now - 2029;
console.log(ageMax, ageSarah);

console.log(ageMax * 2, ageMax / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = 'Max';
const lastName = 'Loncar';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++ // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageMax > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1982 > now - 2029);


// OPERATOR PRECEDENCE
const now = 2045;
const ageMax = now - 1982;
const ageSarah = now - 2029;

console.log(now - 1982 > now - 2029);

let x, y;
x = y = 25 - 5 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageMax + ageSarah) / 2;
console.log(ageMax, ageSarah, averageAge);


// CODING CHALLENGE #1
// Test data 1
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

// Test data 2
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


// STRINGS AND TEMPLATE LITERALS
const firstName = 'Max';
const job = 'developer';
const birthYear = 1998;
const year = 2023;

const max = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(max);

const maxNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(maxNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);


// TAKING DECISIONS: IF/ELSE STATEMENTS
const age = 15;

if (age >= 18) {
  console.log('Max can start driving license.');
} else {
  const yearsLeft = 18 - age;
  console.log(`Max is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// CODING CHALLENGE #2
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${Math.round(BMIMark * 10) / 10}) is higher than John's (${Math.round(BMIJohn * 10) / 10})!`);
} else {
  console.log(`John's BMI (${Math.round(BMIJohn * 10) / 10}) is higher than Mark's (${Math.round(BMIMark * 10) / 10})!`);
}


// TYPE CONVERSION
const inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Max'));
console.log(typeof NaN);  // (invalid) number

console.log(String(23), 23);

// TYPE COERCION
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // -, * and / trigger the opposite conversion (strings to numbers)
console.log('23' * '2');
console.log('23' / '2');
console.log('23' + '10' + 3); // + does not trigger conversion, instead it concatenates

let n = '1' + 1;
n = n - 1;
console.log(n);


// TRUTHY AND FALSY VALUES
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Max'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// EQUALITY OPERATORS: == VS. ===
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 17) {
  console.log('17 is also a cool number');
} else if (favourite === 5) {
  console.log('5 is also a cool number');
} else {
  console.log('Number is not 23 or 17');
}

if (favourite !== 23) {
  console.log('Why not 23?');
}


// LOGICAL OPERATORS
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Max is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// CODING CHALLENGE #3
// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log('Team Dolphins wins a trophy!');
// } else if (averageScoreKoalas > averageScoreDolphins) {
//   console.log('Team Koalas wins a trophy!');
// } else {
//   console.log("It's a draw!");
// }

// BONUS 1
// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

// console.log(averageScoreDolphins, averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//   console.log('Team Dolphins wins a trophy!');
// } else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
//   console.log('Team Koalas wins a trophy!');
// } else {
//   console.log("It's a draw!");
// }

// BONUS 2
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
  console.log('Team Dolphins wins a trophy!');
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
  console.log('Team Koalas wins a trophy!');
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy!");
}


// THE SWITCH STATEMENT
const day = 'monday';

switch(day) {
  case 'monday':  // day === 'monday'
    console.log('Plan going to the gym');
    console.log('Go to the meetup');
    break;
  case 'tuesday':
    console.log('Prepare for gym');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Resting');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan going to the gym');
  console.log('Go to the meetup');
} else if (day === 'tuesday') {
  console.log('Prepare for gym');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Resting');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}


// THE CONDITIONAL (TERNARY) OPERATOR
const age = 25;
//age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// CODING CHALLENGE #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
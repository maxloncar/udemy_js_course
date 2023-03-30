'use strict';

/*
// SCOPING IN PRACTICE
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Max';
calcAge(1996);
// console.log(age);
// printAge();


// HOISTING AND TDZ IN PRACTICE
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Max';
let job = 'developer';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// THE THIS KEYWORD IN PRACTICE
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  // console.log(this);
};

calcAge(1998);

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  // console.log(this); // lexical this keyword (parent's scope)
};

calcAgeArrow(1988);

const max = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

max.calcAge();

const matilda = {
  year: 2017,
};

// method borrowing
matilda.calcAge = max.calcAge;
matilda.calcAge();

const f = max.calcAge;
f();


// REGULAR FUNCTIONS VS. ARROW FUNCTIONS
// var firstName = 'Matilda';

const max = {
  firstName: 'Max',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

max.greet();
max.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);


// PRIMITIVES VS. OBJECTS (PRIMITIVE VS, REFERENCE TYPES)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Max',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// PRIMITIVES VS. OBJECTS IN PRACTICE
// Primitive types
let lastName = 'Lončar';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

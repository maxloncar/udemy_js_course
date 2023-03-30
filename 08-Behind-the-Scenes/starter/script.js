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
*/

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

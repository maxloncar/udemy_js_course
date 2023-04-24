'use strict';

/*
// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const max = new Person('Max', 1998);
console.log(max);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1995);
console.log(matilda, jack);

console.log(max instanceof Person);

// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

max.calcAge();
matilda.calcAge();

console.log(max.__proto__);
console.log(max.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(max));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(max.species, matilda.species);

console.log(max.hasOwnProperty('firstName'));
console.log(max.hasOwnProperty('species'));

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS
console.log(max.__proto__);
// Object.prototype (top of prototype chain)
console.log(max.__proto__.__proto__);
console.log(max.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 6, 14, 651, 3, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
); // 6 levels of prototypal inheritance (7th is null)

console.dir(x => x + 1);
*/

// CODING CHALLENGE #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed; // current speed in km/h
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();

bmw.brake();
mercedes.brake();

bmw.accelerate();
mercedes.accelerate();

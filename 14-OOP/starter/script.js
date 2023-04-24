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

// Static method
Person.hey = function () {
  console.log('Hey there ✋');
  console.log(this);
};

Person.hey();

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

// ES6 CLASSES
// class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there ✋');
    console.log(this);
  }
}

const max2 = new PersonCl('Max Lončar', 1998);
console.log(max2);
max2.calcAge();
console.log(max2.age);

console.log(max2.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
max2.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict-mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();


// SETTERS AND GETTERS
const account = {
  owner: 'max',
  movements: [200, 540, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


// OBJECT.CREATE
const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2003);
sarah.calcAge();
*/

// CODING CHALLENGE #2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();

console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford);

ford.brake();
ford.accelerate();

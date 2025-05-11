 const exampleVar = "example";
 const exampleArr = ["ex", "am", "ple"];
 console.log(exampleArr);

 // 1. Prediction: : [ 'ex', 'am', 'ple' ]
// Problem 1: Why did the code produce that output? If applicable, how would you get the index value that did not output?

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

// 1. Prediction:
// randomCar will be 'Tesla'
// otherRandomCar will be 'Mercedes'

// 2. Actual output:
console.log(randomCar);         // Tesla
console.log(otherRandomCar);    // Mercedes

// 3. Explanation:
// Destructuring takes values based on position. [randomCar] takes index 0. [ ,otherRandomCar] skips index 0, takes index 1.

// To get the 3rd index (Honda):
const [,,thirdCar] = cars;
console.log(thirdCar); // Honda


// Problem 2: Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;

// 1. Prediction:
// otherName = 'Elon'
// employeeName will throw ReferenceError

// 2. Actual output:
console.log(otherName);      // Elon
// console.log(employeeName); // ReferenceError

// 3. Explanation:
// `employeeName` is renamed to `otherName`, so `employeeName` is not defined in this scope.
// To fix the error, log `otherName` instead, or do:
// const { employeeName } = employee;


// Problem 3: Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

// 1. Prediction:
// password = '12345'
// hashedPassword = undefined

// 2. Actual output:
console.log(password);         // 12345
console.log(hashedPassword);  // undefined

// 3. Explanation:
// person does NOT have a 'password' key, so destructuring returns undefined.
// No code change needed to keep logs the same. To get value from person, you must add the 'password' property.


// Problem 4: Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;           // 2
const [,,,second] = numbers;        // 5
const [,,,,,,,,third] = numbers;    // 2

// 1. Prediction:
// first === second -> false (2 !== 5)
// first === third -> true (2 === 2)

// 2. Actual output:
console.log(first === second); // false
console.log(first === third);  // true

// 3. 4th index value:
const [, , , , fourthIndex] = numbers;
console.log(fourthIndex); // 6


// Problem 5: Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

// 1. Prediction:
// key = 'value'
// secondKey = [1, 5, 1, 8, 3, 3]
// secondKey[0] = 1
// willThisWork = 5

// 2. Actual output:
console.log(key);            // value
console.log(secondKey);      // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);   // 1
console.log(willThisWork);   // 5

// 3. Last value in secondKey:
console.log(secondKey[secondKey.length - 1]); // 3


// Problem 6: First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// 1. Scopes:
// Global Scope
// printNames scope
// actuallyPrintingNames scope

// 2. Prediction:
// Logs each name with its index
// Final log: last name and index (Ringo:4)

// 3. Actual output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
// name and index after loop is Ringo:4


// Problem 7: Why did the code produce that output?

function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}

// 1. Prediction:
// ReferenceError because name and index are block scoped inside the for loop

// 2. Actual output:
// ReferenceError: name is not defined
// Explanation:
// `let` and `const` are block scoped, not function scoped. So `name` and `index` don’t exist after the loop.


// Problem 8: Why did the code produce that output? Explain the output, including any possible errors and why they occurred.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// 1. Prediction:
// Each name will be printed with its index
// No error

// 2. Actual output:
// Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3

// 3. Explanation:
// `let` and `const` used inside for loop means name/index are scoped correctly.
// No code outside tries to access them, so everything runs fine.


// Problem 9: Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
  composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}

console.log(planet.composition[0] === planetCopy.composition[0]); // true
console.log(planet === planetCopy); // false

// 1. Explanation:
// `planet.composition[0] === planetCopy.composition[0]` is true because composition is still referencing the same array
// `planet === planetCopy` is false because spread operator creates a new object (shallow copy), different reference


     

 
 
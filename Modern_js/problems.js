// Problem 1:
const isAdult = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(isAdult(20)); 
console.log(isAdult(16)); 

// Problem 2:
const isRaining = raining => raining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(isRaining(true));  
console.log(isRaining(false)); 

// Problem 3:
const isEven = num => num % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(isEven(4)); 
console.log(isEven(7)); 

// Problem 4:
const compareNums = (a, b) => a > b ? `${a} is more than ${b}!` : `${a} is less than ${b}!`;
console.log(compareNums(10, 5)); 
console.log(compareNums(3, 9));  

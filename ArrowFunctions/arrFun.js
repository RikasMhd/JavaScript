// Chapter 32-36: map(), filter(), reduce() with Arrow Functions

const numbers = [1, 2, 3, 4, 5, 6];

// 1. map() - transform each element
const squares = numbers.map(element => Math.pow(element, 2));
const cubes = numbers.map(element => Math.pow(element, 3));

console.log("Squares:", squares); // [1, 4, 9, 16, 25, 36]
console.log("Cubes:", cubes);     // [1, 8, 27, 64, 125, 216]

// 2. filter() - keep only items that pass test
const evenNums = numbers.filter(element => element % 2 === 0);
const oddNums = numbers.filter(element => element % 2 !== 0);

console.log("Even numbers:", evenNums); // [2, 4, 6]
console.log("Odd numbers:", oddNums);   // [1, 3, 5]

// 3. reduce() - reduce array to single value
const total = numbers.reduce((accumulator, element) => accumulator + element);
const max = numbers.reduce((acc, el) => Math.max(acc, el));
const min = numbers.reduce((acc, el) => Math.min(acc, el));

console.log("Sum/Total:", total); // 21
console.log("Max:", max);         // 6
console.log("Min:", min);         // 1

// 4. Bonus: Arrow function example from chapter 36
const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
};

hello("Bro", 25);
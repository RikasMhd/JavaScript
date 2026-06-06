// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.push("coconut");     // adds to end
//fruits.pop();               // removes from end  
//fruits.unshift("mango");    // adds to start
//fruits.shift();             // removes from start

let numOfFruits = fruits.length;           // 4
let index = fruits.indexOf("mango");       // -1 because "mango" not in array

console.log(index);                        // -1
console.log(numOfFruits);                  // 4
console.log(fruits);                       // ['apple', 'orange', 'banana', 'coconut']
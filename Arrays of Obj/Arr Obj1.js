const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}
];

// forEach to print all fruits
fruits.forEach(fruit => console.log(fruit.name, fruit.color, fruit.calories));

console.log("--- push ---");
// push = add element to end
fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits.length); // 6

console.log("--- pop ---");
// pop = remove element from end
fruits.pop();
console.log(fruits.length); // 5

console.log("--- unshift ---");
// unshift = add element to start  
fruits.unshift({name: "mango", color: "yellow", calories: 99});
console.log(fruits.length); // 6

console.log("--- shift ---");
// shift = remove element from start
fruits.shift();
console.log(fruits.length); // 5

console.log("--- splice ---");
// splice = remove/add at specific index. splice(start, deleteCount, item)
fruits.splice(2, 1); // remove 1 item at index 2 = banana
console.log(fruits.length); // 4

console.log("--- slice ---");
// slice = copy part of array. Doesn't change original
const yellowFruits = fruits.slice(1, 3); 
console.log(yellowFruits.length); // 2

console.log("--- final array ---");
fruits.forEach(fruit => console.log(fruit.name));
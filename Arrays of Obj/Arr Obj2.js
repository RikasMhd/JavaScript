const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}
];

console.log("--- forEach ---");
// forEach = runs function for each element. No return
fruits.forEach(fruit => console.log(fruit.name));

console.log("--- map ---");
// map = creates new array by transforming each element
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);

console.log("--- filter ---");
// filter = creates new array with elements that pass test
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
lowCalFruits.forEach(f => console.log(f.name, f.calories));

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
yellowFruits.forEach(f => console.log(f.name));

console.log("--- reduce ---");
// reduce = reduces array to single value
const totalCalories = fruits.reduce((total, fruit) => total + fruit.calories, 0);
console.log(totalCalories);

const maxCalories = fruits.reduce((max, fruit) => fruit.calories > max ? fruit.calories : max, 0);
console.log(maxCalories);
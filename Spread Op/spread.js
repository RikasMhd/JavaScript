// spread operator = ... allows an iterable such as an 
//                    array or string to be expanded 
//                    into separate elements
//                    (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);  // 5
let minimum = Math.min(...numbers);  // 1

console.log(minimum);  // 1
console.log(maximum);  // 5

console.log("");

let username="Mhd Rikas";
let letters=[...username].join("-");

console.log(letters);       //M-h-d- -R-i-k-a-s

console.log("");

let fruits = ["apple", "orange", "banana", "coconut"];
let veg = ["carrot", "beans", "potato", "tomato"];

let foods=[...fruits,...veg,"eggs","milk"];
console.log(foods);     //['apple', 'orange', 'banana', 'coconut', 'carrot', 'beans', 'potato', 'tomato', 'eggs', 'milk']0: "apple"1: "orange"2: "banana"3: "coconut"4: "carrot"5: "beans"6: "potato"7: "tomato"8: "eggs"9: "milk"length: 10[[Prototype]]: Array(0)

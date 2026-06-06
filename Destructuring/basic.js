// destructuring = extract values from arrays and objects,
// then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// --------- EXAMPLE 1 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]]; // swap first and last

console.log(colors);

console.log("------------");
// --------- EXAMPLE 2 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor,...extraColors] = colors;

console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue
console.log(extraColors); // ['black', 'white']
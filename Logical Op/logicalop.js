// LOGICAL OPERATORS
// && = AND - both conditions must be true
// || = OR - at least one condition must be true  
// ! = NOT - reverses true/false

let temp = 25;
let isSunny = true;

// AND &&
if(temp > 20 && temp < 30 && isSunny){
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

// OR ||
if(temp <= 0 || temp > 30){
    console.log("Stay inside");
} else {
    console.log("You can go outside");
}

// NOT !
let isStudent = false;
if(!isStudent){
    console.log("You are not a student");
} else {
    console.log("You are a student");
}

// Example with prompt
let age = Number(window.prompt("Enter your age: "));

if(age >= 18 && age <= 65){
    console.log("You are eligible to work");
} else if(age < 18 || age > 65){
    console.log("You are not eligible to work");
}
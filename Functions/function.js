function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(add(10, 5));        // 15
console.log(subtract(10, 5));   // 5
console.log(multiply(10, 5));   // 50
console.log(divide(10, 5));     // 2

console.log(isEven(10));        // true
console.log(isEven(7));         // false

console.log(isValidEmail("Bro@fake.com"));           // true
console.log(isValidEmail("ElonMusk.com"));           // false
console.log(isValidEmail("Zuckerberg@Meta.com"));    // true
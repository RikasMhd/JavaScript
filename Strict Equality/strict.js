// 1. = assignment operator → gives a value to variable
let x = 10;
console.log("x =", x); // 10

// 2. == comparison operator → checks if values are equal, ignores datatype
let a = 5;
let b = "5";
console.log(a == b); // true  because "5" becomes 5

// 3. === strict equality operator → checks value AND datatype
let c = 5;
let d = "5";
console.log(c === d); // false  because number !== string

// 4. != inequality operator → checks if values are NOT equal, ignores datatype
let e = 10;
let f = "10";
console.log(e != f); // false  because "10" becomes 10

// 5. !== strict inequality operator → checks if value OR datatype is NOT equal
let g = 10;
let h = "10";
console.log(g !== h); // true  because number !== string

// Your PI example from screenshot
const PI = "3.14";
if(PI !== "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi"); // this runs
}
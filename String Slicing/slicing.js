// string.slice(start, end) + indexOf()

const fullName = "Broseph Code";

// Find the space and split the name
let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4,8);

// First and last character
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

let firstName1 = fullName.slice(0, fullName.indexOf(" "));
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1);

// Show in console
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("First Char:", firstChar);
console.log("Last Char:", lastChar);
console.log("First Name1:", firstName1);
console.log("Last Name2:", lastName1);





// string slicing = creating a substring from a portion of another string
// string.slice(start, end)

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

let username = window.prompt("Enter your username: ");

// ----- NO METHOD CHAINING -----
trim = username.trim();
char = username.charAt(0);
upper = username.toUpperCase();
slice = username.slice(1);
lower = username.toLowerCase();
user = username.charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(trim);
console.log(char);
console.log(upper);
console.log(slice);
console.log(lower);
console.log(user);

// ----- METHOD CHAINING -----
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
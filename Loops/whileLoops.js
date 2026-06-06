// while loop = repeat some code WHILE some condition is true
/*let username="";
while(username===""){
    username=window.prompt("Enter Your username:");
}
console.log(`Hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}



/*
// do while loop = runs code ONCE first, then repeats WHILE condition is true


do {
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
} while(!loggedIn);
 */
// callback = a function passed as an argument to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests  
// 3. Interacting with databases

// "Hey, when you're done, call this function"

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait...");
}

function leave(callback){
    console.log("Leave!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

hello(wait);
leave(goodbye);// callback = a function passed as an argument to another function

// Used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests  
// 3. Interacting with databases

// "Hey, when you're done, call this function"

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait...");
}

function leave(callback){
    console.log("Leave!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

hello(wait);
leave(goodbye);
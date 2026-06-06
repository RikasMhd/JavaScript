setTimeout((() => console.log("Task1")), 3000);

console.log("Task2");
console.log("Task3");
console.log("Task4");   //After printing Task2, Task3 and Task4, the browser will wait 3 seconds and then print Task1. This is because setTimeout is an asynchronous function, which means it doesn't block the execution of the rest of the code while waiting for the timer to finish.    

// synchronous  = Executes line by line consecutively in a sequential manner
//                Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

///Ex:
function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
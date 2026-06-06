// variable scope = where a variable is recognized and accessible (local vs global)

let x = 3; // global variable - accessible everywhere

function1();
function2();

function function1(){
    let x = 1; // local variable - only inside function1
    console.log(x); // 1
}

function function2(){
    let x = 2; // local variable - only inside function2  
    console.log(x); // 2
}

console.log(x); // 3
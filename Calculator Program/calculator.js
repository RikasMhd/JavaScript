// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        // eval parses the string mathematical equation and computes the answer
        display.value = eval(display.value);
    }
    catch(error){
        // Safely prevents the application from crashing upon malformed input strings
        display.value = "Error";
    }
}
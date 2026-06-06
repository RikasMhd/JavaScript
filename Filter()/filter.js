let num=[1,2,3,4,5,6];
let evenNum=num.filter(isEven);
let oddNum=num.filter(isOdd);

console.log(evenNum);
console.log(oddNum);

function isEven(element){
    return element % 2===0;
}
function isOdd(element){
    return element % 2!==0;
}

//Ex2:
let age=[16,17,18,19,20,21,22,12];
let child=age.filter(isChild);
let adult=age.filter(isAdult);

console.log(child);
console.log(adult);

function isChild(element){
    return element >=18;
}
function isAdult(element){
    return element <18 ;
}

//Ex3:
// .filter() = creates a new array by filtering
// out elements

const words = ["apple", "orange", "banana", "kiwi",
               "pomegranate", "coconut"];

const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords); // ["apple", "orange", "banana", "kiwi"]
console.log(longWords);  // ["pomegranate", "coconut"]
console.log(words);      // original unchanged

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}
// DOM Navigation = moving through HTML elements using relationships
// parent, child, sibling


/*
const fruits = document.getElementById("fruits");

// 1. firstElementChild
const firstFruit = fruits.firstElementChild;
firstFruit.style.backgroundColor = "yellow";
console.log("1. firstElementChild:", firstFruit.textContent);

// 2. lastElementChild  
const lastFruit = fruits.lastElementChild;
lastFruit.style.backgroundColor = "lightblue";
console.log("2. lastElementChild:", lastFruit.textContent);

// 3. parentElement
const parent = firstFruit.parentElement;
parent.style.border = "3px solid red";
console.log("3. parentElement id:", parent.id);

// 4. nextElementSibling
const next = firstFruit.nextElementSibling;
next.style.fontWeight = "bold";
console.log("4. nextElementSibling:", next.textContent);

// 5. previousElementSibling
const prev = lastFruit.previousElementSibling;
prev.style.color = "green";
console.log("5. previousElementSibling:", prev.textContent);

// 6. children - HTMLCollection
const allFruits = fruits.children;
console.log("6. children length:", allFruits.length);
Array.from(allFruits).forEach((fruit, index) => {
    if(index !== 0 && index !== 2) { // skip first and last
        fruit.style.textDecoration = "underline";
    }
});

// 7. Chain navigation: fruits → last child → prev sibling
fruits.lastElementChild.previousElementSibling.style.fontSize = "24px";

*/

/*
const element = document.getElementById("desserts");    //if we put fruits fruits first elemnt color is yellow
const firstChild=element.firstElementChild;
firstChild.style.backgroundColor="yellow";  //only  cake is yellow bg
*/

/*const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement=>{
    const firstChild=ulElement.firstElementChild;
    firstChild.style.backgroundColor="yellow";
})      //All 1st Elemnt ylw color
*/
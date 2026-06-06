// DOM Navigation = moving through HTML elements using relationships
// parent, child, sibling

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
prev.style.color = "green";// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements from the DOM

// 1. getElementById() - ELEMENT OR NULL
const heading = document.getElementById("my-heading");
heading.style.color = "crimson";
console.log("1. getElementById:", heading.textContent);

// 2. getElementsByClassName() - HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");
console.log("2. getElementsByClassName length:", fruits.length);
// Convert HTMLCollection to Array to use forEach
Array.from(fruits).forEach(fruit => {
    fruit.style.border = "2px solid orange";
});
// Change only Banana - index 2
fruits[2].style.backgroundColor = "yellow";

// 3. getElementsByTagName() - HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
console.log("3. getElementsByTagName h4 count:", h4Elements.length);
Array.from(h4Elements).forEach(h4 => {
    h4.style.backgroundColor = "yellow";
});

// 4. querySelector() - FIRST ELEMENT OR NULL
const firstLi = document.querySelector("li");
firstLi.style.fontWeight = "bold";
console.log("4. querySelector first li:", firstLi.textContent);

// 5. querySelectorAll() - NODELIST
const allLi = document.querySelectorAll("li");
console.log("5. querySelectorAll li count:", allLi.length);
allLi.forEach(li => {
    li.style.backgroundColor = "lightgreen";
});
// Can also use indexing like array
allLi[5].style.color = "red"; // Onions
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
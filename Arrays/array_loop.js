let fruits = ["apple", "orange", "banana", "coconut"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("");

for(let i=0;i<fruits.length;i+=2){
    console.log(fruits[i]);
}

console.log("");

for(let i=fruits.length;i>=0;i--){
    console.log(fruits[i]);
}

console.log("");

for(let fruit of fruits){
    console.log(fruit);
}
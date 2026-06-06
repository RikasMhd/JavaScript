//Ex:1
let numbers=[1,10,12,9,3,7,5,6,0];
numbers.sort((a,b)=>a-b);   //asc
//numbers.sort((a,b)=>b-a);   //reverse
console.log(numbers);

//Ex:2
const people = [
    {name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patrick", age: 37, gpa: 1.5},
    {name: "Squidward", age: 51, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}
];

console.log("--- Original ---");
people.forEach(p => console.log(p.name, p.age, p.gpa));

console.log("--- Sort by name A-Z ---");
// Strings: use localeCompare for alphabetical
people.sort((a, b) => a.name.localeCompare(b.name));
people.forEach(p => console.log(p.name));

console.log("--- Sort by name Z-A ---");
people.sort((a, b) => b.name.localeCompare(a.name));
people.forEach(p => console.log(p.name));

console.log("--- Sort by age ascending ---");
// Numbers: subtract a - b for ascending
people.sort((a, b) => a.age - b.age);
people.forEach(p => console.log(p.name, p.age));

console.log("--- Sort by age descending ---");
people.sort((a, b) => b.age - a.age);
people.forEach(p => console.log(p.name, p.age));

console.log("--- Sort by GPA ascending ---");
people.sort((a, b) => a.gpa - b.gpa);
people.forEach(p => console.log(p.name, p.gpa));

console.log("--- Sort by GPA descending ---");
people.sort((a, b) => b.gpa - a.gpa);
people.forEach(p => console.log(p.name, p.gpa));
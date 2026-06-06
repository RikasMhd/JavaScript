// constructor = special method for defining the
// properties and methods of objects

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.model}`)};
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Test the objects
console.log(car1.make);   // Ford
console.log(car1.model);  // Mustang
console.log(car1.year);   // 2024
console.log(car1.color);  // red

console.log(car2.make);   // Chevrolet
console.log(car2.model);  // Camaro

console.log(car3.make);   // Dodge

// Call methods
car1.drive(); // You drive the Mustang
car2.drive(); // You drive the Camaro
car3.drive(); // You drive the Charger
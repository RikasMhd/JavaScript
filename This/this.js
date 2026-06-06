// this = reference to the object where "this" is used
// The object depends on what's before the dot

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello(); // Hi! I am Spongebob
person1.eat();      // Spongebob is eating hamburgers

person2.sayHello(); // Hi! I am Patrick  
person2.eat();      // Patrick is eating pizza
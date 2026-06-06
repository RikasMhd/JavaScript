class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                           "Bikini Bottom",
                                           "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St.",
                                          "Bikini Bottom", 
                                          "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");

// Print name, age, and full address for each person
console.log(person1.name, person1.age, person1.address.street, person1.address.city, person1.address.country);
console.log(person2.name, person2.age, person2.address.street, person2.address.city, person2.address.country);
console.log(person3.name, person3.age, person3.address.street, person3.address.city, person3.address.country);
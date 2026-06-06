class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age); // calls Animal constructor
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run ${this.runSpeed} km/h`);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age); // calls Animal constructor
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim ${this.swimSpeed} km/h`);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age); // calls Animal constructor
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly ${this.flySpeed} km/h`);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(rabbit.name); // rabbit
console.log(rabbit.age);  // 1
rabbit.eat();  // This rabbit is eating - inherited
rabbit.run();  // This rabbit can run 25 km/h

console.log(fish.name); // fish
fish.sleep(); // This fish is sleeping - inherited
fish.swim();  // This fish can swim 12 km/h

console.log(hawk.name); // hawk
hawk.eat(); // This hawk is eating - inherited
hawk.fly(); // This hawk can fly 50 km/h
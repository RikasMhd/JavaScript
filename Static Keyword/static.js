// static = keyword that defines properties or methods that
// belong to a class itself rather than the objects created
// from that class (class owns anything static)

//Ex:1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.getDiameter(10)); // 20
console.log(MathUtil.getCircumference(10)); // 62.8318
console.log(MathUtil.getArea(10)); // 314.159

console.log("");
//Ex:2
class User {
    static userCount = 0; // static property - belongs to class, not objects

    constructor(username){
        this.username = username;
        User.userCount++; // increase static count each time new user is made
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello(); // Hello, my username is Spongebob
user2.sayHello(); // Hello, my username is Patrick  
user3.sayHello(); // Hello, my username is Sandy

User.getUserCount(); // There are 3 users online
// user1.getUserCount(); ❌ Error - static methods can't be called on objects

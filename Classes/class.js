class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price.toFixed(2)}`);

    }
    calculateTotal(salesprice){
        return this.price+(this.price * salesprice);
    }
}

const p1=new product("shirt",19.99);
const p2=new product("pants",22.50);
const p3=new product("underwear",100);

p1.displayProduct();
const total1=p1.calculateTotal(0.05);
console.log(`Total Price (with Tax) : $${total1.toFixed(2)}`);
console.log("");

p2.displayProduct();
const total2=p2.calculateTotal(0.5);
console.log(`Total Price (with Tax) : $${total2.toFixed(2)}`);
console.log("");

p3.displayProduct();
const total3=p3.calculateTotal(0.75);
console.log(`Total Price (with Tax) : $${total3.toFixed(2)}`);
console.log("");
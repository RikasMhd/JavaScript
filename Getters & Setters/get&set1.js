class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm²`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);  // 3.0cm
console.log(rectangle.height); // 4.0cm
console.log(rectangle.area);   // 12.0cm²

rectangle.width = 5.5;
rectangle.height = 2.25;
console.log(rectangle.area);   // 12.4cm²

rectangle.width = -2; // Width must be a positive number
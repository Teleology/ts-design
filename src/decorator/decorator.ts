class Circle {
    public draw():void {
        console.log("draw a circle");
    }
}

class Decorator {
    private circle: Circle;
    constructor(circle: Circle) {
        this.circle = circle;
    }

    public draw() {
        this.circle.draw();
        this.setRedBorder(this.circle);
    }

    private setRedBorder(circle: Circle):void {
        console.log("set red border");
    }
}


let circle = new Circle();
let dec = new Decorator(circle);
dec.draw();
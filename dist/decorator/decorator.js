var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("draw a circle");
    };
    return Circle;
}());
var Decorator = /** @class */ (function () {
    function Decorator(circle) {
        this.circle = circle;
    }
    Decorator.prototype.draw = function () {
        this.circle.draw();
        this.setRedBorder(this.circle);
    };
    Decorator.prototype.setRedBorder = function (circle) {
        console.log("set red border");
    };
    return Decorator;
}());
var circle = new Circle();
var dec = new Decorator(circle);
dec.draw();
//# sourceMappingURL=decorator.js.map
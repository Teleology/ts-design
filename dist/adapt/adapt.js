var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return "German specifications";
    };
    return Adaptee;
}());
var Target = /** @class */ (function () {
    function Target() {
        this.adaptee = new Adaptee();
    }
    Target.prototype.request = function () {
        var info = this.adaptee.specificRequest();
        return info + " - transform German";
    };
    return Target;
}());
var target = new Target();
console.log(target.request());
//# sourceMappingURL=adapt.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var State = /** @class */ (function () {
    function State(color) {
        this.color = color;
    }
    State.prototype.doAction = function (context) {
        console.log("turn to " + this.color);
        context.setState(this);
    };
    return State;
}());
var Context = /** @class */ (function () {
    function Context() {
        this.state = null;
    }
    Context.prototype.getState = function () {
        return this.state;
    };
    Context.prototype.setState = function (state) {
        try {
            this.state = state;
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    };
    return Context;
}());
var context = new Context();
var green = new State("green");
var yellow = new State("yellow");
var red = new State("red");
green.doAction(context);
console.log(context);
setTimeout(function () {
    red.doAction(context);
    console.log(context);
}, 5000);
//# sourceMappingURL=status.js.map
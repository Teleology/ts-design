"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject() {
        this.state = 0;
        this.observers = [];
    }
    Subject.prototype.getState = function () {
        return this.state;
    };
    Subject.prototype.setState = function (state) {
        this.state = state;
        this.notifyAllObservers();
    };
    Subject.prototype.notifyAllObservers = function () {
        this.observers.forEach(function (observer) {
            observer.update();
        });
    };
    Subject.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    return Subject;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    ConcreteObserver.prototype.update = function () {
        console.log(this.name + " notified updation, state: " + this.subject.getState());
    };
    return ConcreteObserver;
}());
var s1 = new Subject();
var o1 = new ConcreteObserver("o1", s1);
var o2 = new ConcreteObserver("o2", s1);
s1.setState(3);
//# sourceMappingURL=subscription.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Foo = {
    foo: function () {
        alert(123);
    }
};
var IsMixed = /** @class */ (function () {
    function IsMixed() {
    }
    IsMixed = __decorate([
        mixins(Foo)
    ], IsMixed);
    return IsMixed;
}());
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.fnc = function () {
        console.log(123);
    };
    __decorate([
        readonly
    ], Demo.prototype, "fnc", null);
    Demo = __decorate([
        test3(false)
    ], Demo);
    return Demo;
}());
// error when running
new Demo().fnc = function () { return console.log(48); };
function test2(target) {
    target.isDec = true;
}
function test3(isDec) {
    return function (target) {
        target.isDec = isDec;
    };
}
function mixins(list) {
    return function (target) {
        Object.assign.apply(Object, [target].concat(list));
        console.log(target.prototype);
    };
}
function readonly(target, propertyKey, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
function log(target, propertyKey, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log("log");
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}
// @ts-ignore
console.log(Demo.isDec);
// @ts-ignore
console.log(IsMixed.foo());
/*
@decorator
class A {
}

equals to

class A {
}

A = decorator(A) || A
 */
//# sourceMappingURL=es7-decorator.js.map
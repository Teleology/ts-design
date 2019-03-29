import {func} from "prop-types";

const Foo = {
    foo: () => {
        alert(123);
    }
};


@mixins(Foo)
class IsMixed {

}

@test3(false)
class Demo {

    @readonly
    public fnc():void {
        console.log(123);
    }
}

// error when running
new Demo().fnc = () => console.log(48);





function test2(target: any):void {
    target.isDec = true;
}

function test3(isDec: boolean):(target: any) => void {
    return (target: any) => {
        target.isDec = isDec;
    };
}

function mixins(list: any):((target: any) => void) {
    return (target: any) => {
        Object.assign(target, ...list);
        console.log(target.prototype);
    };
}

function readonly(target: Demo, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
    return descriptor;
}

function log(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
    let oldValue = descriptor.value;
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

abstract class Father {
    abstract say():void;
}

class Student extends Father {
    public say(): void {
        console.log("student");
    }
}

class Teacher extends Father {
    public say():void {
        console.log("teacher");
    }
}

let f1 = new Student();
let f2 = new Teacher();

f1.say();
f2.say();
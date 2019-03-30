interface Observer {
    update():void;
}
class Subject {
    private state: number;
    private observers: Array<Observer>;
    constructor() {
        this.state = 0;
        this.observers = [];
    }

    public getState():number {
        return this.state;
    }

    public setState(state: number):void {
        this.state = state;
        this.notifyAllObservers();
    }

    private notifyAllObservers():void {
        this.observers.forEach((observer: Observer) => {
            observer.update();
        });
    }

    public attach(observer: any):void {
        this.observers.push(observer);
    }
}

class ConcreteObserver implements Observer {
    private name: string;
    private subject: Subject;
    constructor(name: string, subject: Subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log(`${this.name} notified updation, state: ${this.subject.getState()}`);
    }
}

let s1 = new Subject();
let o1 = new ConcreteObserver("o1", s1);
let o2 = new ConcreteObserver("o2", s1);

s1.setState(3);

export {};
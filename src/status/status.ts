class State {
    private color:string;

    constructor(color: string) {
        this.color = color;
    }

    public doAction(context: Context) {
        console.log(`turn to ${this.color}`);
        context.setState(this);
    }
}


class Context {
    private state: State;
    constructor() {
        this.state = null;
    }

    public getState(): State {
        return this.state;
    }

    public setState(state: State): boolean {
        try {
            this.state = state;
            return true;
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

let context = new Context();
let green = new State("green");
let yellow = new State("yellow");
let red = new State("red");

green.doAction(context);
console.log(context);


setTimeout(() => {
    red.doAction(context);
    console.log(context);
}, 5000);

export {};


interface State {
    handlePress():void;
    toString(): string;

}

class BaseState {
    protected nextState: State;
    public setNextState(state: State) {
        this.nextState = state;
    }
}

class OffLightState extends BaseState implements State {
    private light: Light;
    constructor(light: Light) {
        super();
        this.light = light;
        this.setNextState(this);
    }

    public handlePress(): void {
        this.light.setState(this.nextState);
        console.log("offline change to weak");
    }

    public toString(): string {
        return "offline state";
    }
}

class WeakLightState extends BaseState implements State {
    private light: Light;
    constructor(light: Light) {
        super();
        this.light = light;
        this.setNextState(this);
    }

    handlePress(): void {
        this.light.setState(this.nextState);
        console.log("weak change to strong");
    }

    toString(): string {
        return "weak state";
    }
}

class StrongLightState extends BaseState implements State {
    private light: Light;
    constructor(light: Light) {
        super();
        this.light = light;
        this.setNextState(this);
    }

    handlePress(): void {
        this.light.setState(this.nextState);
        console.log("strong change to offline");
    }

    toString(): string {
        return "strong state";
    }
}

// can use StateFactory for reuse purpose
function StateFactory(light: Light): State {
    return new class MyState  {
        private light: Light;

        constructor(name: string) {
            this.light = light;
        }

        handlePress(): void {
            // this.light.setState(this.nextState);
            console.log("strong change to offline");
        }

        toString(): string {
            return "strong state";
        }
    }("name");
}

class Light {
    private state: State;
    constructor(state: State) {
        this.state = state;
    }

    public setState(state: State):void {
        this.state = state;
    }

    public getState(): State {
        return this.state;
    }

    public handlePress():void {
        this.state.handlePress();
    }
}

let light = new Light(null);
let offline = new OffLightState(light);
let weakline = new WeakLightState(light);
let strongline = new StrongLightState(light);
offline.setNextState(weakline);
weakline.setNextState(strongline);
strongline.setNextState(offline);
light.setState(offline);
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");

// or you can add all the states to Light class so we don't need setNextState any more, or we can add next state in handlePress Method;

export {};
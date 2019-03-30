interface State {
    handlePress():void;
    toString(): string;

}

function StateFactory(light: string): State {
    return new class MyState implements State {

        private name: string;
        constructor(name: string) {
            this.name = name;
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
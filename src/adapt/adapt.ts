class Adaptee {
    public specificRequest():string {
        return "German specifications";
    }
}

class Target {
    private adaptee: Adaptee;
    constructor() {
        this.adaptee = new Adaptee();
    }
    public request():string {
        let info:string = this.adaptee.specificRequest();
        return `${info} - transform German`;
    }
}

let target:Target = new Target();
console.log(target.request());
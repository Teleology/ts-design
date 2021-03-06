class SingleObject {

    private static instance:SingleObject  = null;

    // important
    private constructor() {

    }


    public static getInstance():SingleObject {
        if(this.instance == null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    }

    public login():void {
        console.log("login");
    }
}


// let a = new SingleObject(); //private constructor
let a = SingleObject.getInstance();
a.login();

export {};

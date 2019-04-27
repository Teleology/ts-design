class LoginForm {
    private state: string;
    private static instance: LoginForm;
    private constructor() {
        this.state = "hide";
    }

    public show():void {
        if(this.state === "show") {
            alert("showed");
        } else {
            this.state = "show";
            console.log("login success");
        }
    }

    public hide():void {
        if(this.state === "hide") {
            alert("hidden");
        } else {
            this.state = "hide";
            console.log("hide success");
        }
    }

    public static getInstance(): LoginForm {
        if(this.instance == null) {
            this.instance = new LoginForm();
        }
        return this.instance;
    }
}

let login1 = LoginForm.getInstance();
login1.show();

let login2 = LoginForm.getInstance();
login2.show();
login2.hide();
console.log(login2 === login1);



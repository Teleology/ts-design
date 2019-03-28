var LoginForm = /** @class */ (function () {
    function LoginForm() {
        this.state = "hide";
    }
    LoginForm.prototype.show = function () {
        if (this.state === "show") {
            alert("showed");
        }
        else {
            this.state = "show";
            console.log("login success");
        }
    };
    LoginForm.prototype.hide = function () {
        if (this.state === "hide") {
            alert("hidden");
        }
        else {
            this.state = "hide";
            console.log("hide success");
        }
    };
    LoginForm.getInstance = function () {
        if (this.instance == null) {
            this.instance = new LoginForm();
        }
        return this.instance;
    };
    return LoginForm;
}());
var login1 = LoginForm.getInstance();
login1.show();
var login2 = LoginForm.getInstance();
login2.show();
login2.hide();
console.log(login2 === login1);
//# sourceMappingURL=LoginForm.js.map
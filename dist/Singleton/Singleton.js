"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingleObject = /** @class */ (function () {
    function SingleObject() {
    }
    SingleObject.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    };
    SingleObject.prototype.login = function () {
        console.log("login");
    };
    SingleObject.instance = null;
    return SingleObject;
}());
// let a = new SingleObject(); //private constructor
var a = SingleObject.getInstance();
a.login();
//# sourceMappingURL=Singleton.js.map
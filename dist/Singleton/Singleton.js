var SingleObject = /** @class */ (function () {
    function SingleObject() {
    }
    SingleObject.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    };
    SingleObject.instance = null;
    return SingleObject;
}());
// let a = new SingleObject(); //private constructor
var a = SingleObject.getInstance();
//# sourceMappingURL=Singleton.js.map
var JavaBean = /** @class */ (function () {
    function JavaBean(id) {
        this.id = id;
    }
    return JavaBean;
}());
var JavaBeanFactory = /** @class */ (function () {
    function JavaBeanFactory() {
        this.map = new Map();
    }
    JavaBeanFactory.prototype.getJavaBeanInstance = function (id) {
        if (this.map.has(id)) {
            return this.map.get(id);
        }
        else {
            var ret = new JavaBean(id);
            this.map.set(id, ret);
            return ret;
        }
    };
    JavaBeanFactory.getInstance = function () {
        if (this.instance == null) {
            this.instance = new JavaBeanFactory();
        }
        return this.instance;
    };
    return JavaBeanFactory;
}());
//# sourceMappingURL=springboot-controller.js.map
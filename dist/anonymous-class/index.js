var msg = "asd";
(function (msgParam) {
    return new /** @class */ (function () {
        function SubClazz(msg) {
        }
        SubClazz.prototype.hello = function () {
            return msg;
        };
        return SubClazz;
    }())(msgParam);
})(msg);
var factory = function (msgParam) {
    return new /** @class */ (function () {
        function SubClazz(msg) {
        }
        SubClazz.prototype.hello = function () {
            return msg;
        };
        return SubClazz;
    }())(msgParam);
};
//# sourceMappingURL=index.js.map
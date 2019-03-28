var Jquery = /** @class */ (function () {
    function Jquery(selector) {
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector));
        var len = dom.length || 0;
        for (var i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || "";
    }
    Jquery.prototype.append = function () {
        return this;
    };
    return Jquery;
}());
// declare global {
//     interface Window {
//         $: any
//     }
// }
// @ts-ignore
window.$ = function (selector) {
    return new Jquery(selector);
};
//# sourceMappingURL=Jquery.js.map
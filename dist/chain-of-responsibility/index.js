var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.setSuccessor = function (successor) {
        this.successor = successor;
        return successor;
    };
    return Order;
}());
//
// class Order200 implements Order {
//     private _succsessor: Order;
//     handle(money: number): void {
//         console.log("handle 200, " + money);
//         this._succsessor && this._succsessor.handle(money);
//     }
//     set successor(successor: Order) {
//         this._succsessor = successor;
//     }
// }
var OrderFactory = function (name) {
    return new /** @class */ (function (_super) {
        __extends(MyOrder, _super);
        function MyOrder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyOrder.prototype.handle = function (money) {
            console.log("handle " + name + ", " + money);
            this.successor && this.successor.handle(money);
        };
        return MyOrder;
    }(Order))();
};
var order1 = OrderFactory("200");
var order2 = OrderFactory("500");
var order3 = OrderFactory("700");
order1.setSuccessor(order2).setSuccessor(order3);
order1.handle(25);
//# sourceMappingURL=index.js.map
abstract class Order {
    protected successor: Order;
    abstract handle(money: number):void;
    public setSuccessor(successor: Order) {
        this.successor = successor;
        return successor;
    }
}
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

let OrderFactory = (name: string) => {
    return new class MyOrder extends Order {
        handle(money: number): void {
            console.log(`handle ${name}, ${money}`);
            this.successor && this.successor.handle(money);
        }
    }();
};

let order1 = OrderFactory("200");
let order2 = OrderFactory("500");
let order3 = OrderFactory("700");

order1.setSuccessor(order2).setSuccessor(order3);
order1.handle(25);
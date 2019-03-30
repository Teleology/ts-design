"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function StrategyFactory(muliplier) {
    return new /** @class */ (function () {
        function MyStrategy() {
        }
        MyStrategy.prototype.calculate = function (salary) {
            return salary * muliplier;
        };
        return MyStrategy;
    }())();
}
var s2 = StrategyFactory(2);
var s3 = StrategyFactory(3);
var s5 = StrategyFactory(5);
var Context = /** @class */ (function () {
    function Context(strategy, base) {
        this._strategy = strategy;
        this._base = base;
    }
    Object.defineProperty(Context.prototype, "strategy", {
        set: function (value) {
            this._strategy = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.getBonus = function () {
        return this._strategy.calculate(this._base);
    };
    return Context;
}());
var context = new Context(s2, 1000);
console.log(context.getBonus());
console.log(context.strategy);
//# sourceMappingURL=strategy.js.map
interface Strategy {
    calculate(salary: number):number;
}

function StrategyFactory(muliplier: number) {
    return new class MyStrategy implements Strategy {
        calculate(salary: number): number {
            return salary * muliplier;
        }

    }();
}

let s2: Strategy = StrategyFactory(2);
let s3: Strategy = StrategyFactory(3);
let s5: Strategy = StrategyFactory(5);

class Context {
    private _strategy: Strategy;
    private _base: number;
    constructor(strategy: Strategy, base: number) {
        this._strategy = strategy;
        this._base = base;
    }


    set strategy(value: Strategy) {
        this._strategy = value;
    }

    public getBonus(): number {
        return this._strategy.calculate(this._base);
    }
}

let context = new Context(s2, 1000);
console.log(context.getBonus());
console.log(context.strategy);

export {};
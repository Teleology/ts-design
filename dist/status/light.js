"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseState = /** @class */ (function () {
    function BaseState() {
    }
    BaseState.prototype.setNextState = function (state) {
        this.nextState = state;
    };
    return BaseState;
}());
var OffLightState = /** @class */ (function (_super) {
    __extends(OffLightState, _super);
    function OffLightState(light) {
        var _this = _super.call(this) || this;
        _this.light = light;
        _this.setNextState(_this);
        return _this;
    }
    OffLightState.prototype.handlePress = function () {
        this.light.setState(this.nextState);
        console.log("offline change to weak");
    };
    OffLightState.prototype.toString = function () {
        return "offline state";
    };
    return OffLightState;
}(BaseState));
var WeakLightState = /** @class */ (function (_super) {
    __extends(WeakLightState, _super);
    function WeakLightState(light) {
        var _this = _super.call(this) || this;
        _this.light = light;
        _this.setNextState(_this);
        return _this;
    }
    WeakLightState.prototype.handlePress = function () {
        this.light.setState(this.nextState);
        console.log("weak change to strong");
    };
    WeakLightState.prototype.toString = function () {
        return "weak state";
    };
    return WeakLightState;
}(BaseState));
var StrongLightState = /** @class */ (function (_super) {
    __extends(StrongLightState, _super);
    function StrongLightState(light) {
        var _this = _super.call(this) || this;
        _this.light = light;
        _this.setNextState(_this);
        return _this;
    }
    StrongLightState.prototype.handlePress = function () {
        this.light.setState(this.nextState);
        console.log("strong change to offline");
    };
    StrongLightState.prototype.toString = function () {
        return "strong state";
    };
    return StrongLightState;
}(BaseState));
// can use StateFactory for reuse purpose
function StateFactory(light) {
    return new /** @class */ (function () {
        function MyState(name) {
            this.light = light;
        }
        MyState.prototype.handlePress = function () {
            // this.light.setState(this.nextState);
            console.log("strong change to offline");
        };
        MyState.prototype.toString = function () {
            return "strong state";
        };
        return MyState;
    }())("name");
}
var Light = /** @class */ (function () {
    function Light(state) {
        this.state = state;
    }
    Light.prototype.setState = function (state) {
        this.state = state;
    };
    Light.prototype.getState = function () {
        return this.state;
    };
    Light.prototype.handlePress = function () {
        this.state.handlePress();
    };
    return Light;
}());
var light = new Light(null);
var offline = new OffLightState(light);
var weakline = new WeakLightState(light);
var strongline = new StrongLightState(light);
offline.setNextState(weakline);
weakline.setNextState(strongline);
strongline.setNextState(offline);
light.setState(offline);
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");
light.handlePress();
console.log(light.getState() + "");
//# sourceMappingURL=light.js.map
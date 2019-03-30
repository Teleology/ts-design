function StateFactory(light) {
    return new /** @class */ (function () {
        function MyState(name) {
            this.name = name;
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
//# sourceMappingURL=interface-create.js.map
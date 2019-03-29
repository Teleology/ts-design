var ReadImg = /** @class */ (function () {
    function ReadImg(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();
    }
    ReadImg.prototype.display = function () {
        console.log("display" + this.fileName);
    };
    ReadImg.prototype.loadFromDisk = function () {
        console.log("loading" + this.fileName);
    };
    return ReadImg;
}());
var ProxyImg = /** @class */ (function () {
    function ProxyImg(fileName) {
        this.realImg = new ReadImg(fileName);
    }
    ProxyImg.prototype.display = function () {
        this.realImg.display();
    };
    return ProxyImg;
}());
var proxyImg = new ProxyImg("1.png");
proxyImg.display();
//# sourceMappingURL=proxy.js.map
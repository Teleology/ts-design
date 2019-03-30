var Memento = /** @class */ (function () {
    function Memento(content) {
        this.content = content;
    }
    Memento.prototype.getContent = function () {
        return this.content;
    };
    return Memento;
}());
var CareTaker = /** @class */ (function () {
    function CareTaker() {
        this.list = [];
    }
    CareTaker.prototype.add = function (memento) {
        this.list.push(memento);
    };
    CareTaker.prototype.get = function (index) {
        return this.list[index];
    };
    return CareTaker;
}());
var Editor = /** @class */ (function () {
    function Editor() {
        this.content = null;
    }
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.saveContentToMemento = function () {
        return new Memento(this.content);
    };
    Editor.prototype.getContentFromMemento = function (memento) {
        this.content = memento.getContent();
    };
    return Editor;
}());
var editor = new Editor();
var careTaker = new CareTaker();
editor.setContent("111");
careTaker.add(editor.saveContentToMemento());
editor.setContent("222");
console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(0));
console.log(editor.getContent());
//# sourceMappingURL=index.js.map
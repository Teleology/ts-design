class Memento {

    private content: string;
    constructor(content: string) {
        this.content = content;
    }

    public getContent():string {
        return this.content;
    }
}


class CareTaker {
    private list: Array<Memento> = [];
    add(memento: Memento) {
        this.list.push(memento);
    }

    get(index: number) {
        return this.list[index];
    }
}


class Editor {
    private content: string = null;
    setContent(content: string) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    saveContentToMemento(): Memento {
        return new Memento(this.content);
    }

    getContentFromMemento(memento: Memento):void {
        this.content = memento.getContent();
    }
}



let editor = new Editor();
let careTaker = new CareTaker();

editor.setContent("111");
careTaker.add(editor.saveContentToMemento());
editor.setContent("222");
console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(0));
console.log(editor.getContent());

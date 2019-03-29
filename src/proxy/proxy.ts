class ReadImg {

    private fileName:string;

    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadFromDisk();
    }

    public display():void {
        console.log("display" + this.fileName);
    }

    private loadFromDisk():void {
        console.log("loading" + this.fileName);
    }

}

class ProxyImg {
    private realImg: ReadImg;
    constructor(fileName: string) {
        this.realImg = new ReadImg(fileName);
    }

    public display():void {
        this.realImg.display();
    }
}

let proxyImg = new ProxyImg("1.png");
proxyImg.display();
class Jquery {
    private length: number;
    private selector: string;
    constructor(selector: string) {
        let slice = Array.prototype.slice;
        let dom: HTMLElement[] = slice.call(document.querySelectorAll(selector));
        let len = dom.length || 0;
        for(let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || "";
    }

    public append(): Jquery {
        return this;
    }

    // some methods
}

// declare global {
//     interface Window {
//         $: any
//     }
// }
// @ts-ignore
window.$ = function (selector: string) {
    return new Jquery(selector);
}
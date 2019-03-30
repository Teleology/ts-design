let msg = "asd";
((msgParam: string) => {
    return new class SubClazz {
        constructor(msg: string) {
        }
        public hello(): string {
            return msg;
        }
    }(msgParam);
})(msg);


let factory = (msgParam: string) => {
    return new class SubClazz {
        constructor(msg: string) {
        }
        public hello(): string {
            return msg;
        }
    }(msgParam);
};
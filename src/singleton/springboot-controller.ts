class JavaBean {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }
}

class JavaBeanFactory {

    private static instance: JavaBeanFactory;
    private map: Map<string, JavaBean> = new Map();

    private constructor() {

    }

    public getJavaBeanInstance(id: string): JavaBean {
        if(this.map.has(id)) {
            return this.map.get(id);
        } else {
            let ret:JavaBean  = new JavaBean(id);
            this.map.set(id, ret);
            return ret;
        }
    }

    public static getInstance(): JavaBeanFactory {
        if(this.instance == null) {
            this.instance = new JavaBeanFactory();
        }
        return this.instance;
    }
}

let star = {
    name: "name",
    age: 25,
    phone: 123456,
    price: 200000
};
type StarType = typeof star;
let agent = new Proxy<StarType>(star, {
    get: function (target: StarType, key: string) {
      if(key === "phone") {
          return 16899999;
      }
      return target[key];
    },

    set: function (target: StarType, key: string, value: number) {
        if(key === "price") {
            if(value < 10000) {
                throw new Error("low price");
            } else {
                target[key] = value;
                return true;
            }
        }
        return false;
    }
});


console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.price = 150000;
console.log("new price = " + star.price + "," + agent.price);
class Cart {
    constructor() {
        if (Cart.instance) {
            return Cart.instance;
        }
        this.items = [];
        Cart.instance = this;
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}

const cart1 = new Cart();
const cart2 = new Cart();

cart1.addItem({ name: "Laptop", price: 1200 });

console.log(cart1.getItems());
console.log(cart2.getItems());
console.log(cart1 === cart2);

module.exports = Cart;
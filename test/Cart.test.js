const Cart = require('../code/creational/Cart'); // Assuming your Cart class is in a file named Cart.js

describe("Singleton Pattern: Cart", () => {
    test("Cart should have only one instance", () => {
        const cart1 = new Cart();
        const cart2 = new Cart();
        expect(cart1).toBe(cart2); // Check if both instances are the same
    });

    test("Cart should allow adding and retrieving items", () => {
        const cart = new Cart();
        cart.addItem({ name: "Laptop", price: 1200 });
        expect(cart.getItems()).toEqual([{ name: "Laptop", price: 1200 }]);
    });
});

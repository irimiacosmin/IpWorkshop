class BasicProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.name;
    }
}

class WarrantyDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice() + 50;
    }

    getDescription() {
        return `${this.product.getDescription()} with warranty`;
    }
}

class AccessoryDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice() + 20;
    }

    getDescription() {
        return `${this.product.getDescription()} with accessory`;
    }
}

const laptop = new BasicProduct("Laptop", 1000);
const laptopWithWarranty = new WarrantyDecorator(laptop);
const laptopWithWarrantyAndAccessory = new AccessoryDecorator(laptopWithWarranty);
console.log(laptopWithWarrantyAndAccessory.getDescription());
console.log(laptopWithWarrantyAndAccessory.getPrice());

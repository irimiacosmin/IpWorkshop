class Order {
    constructor() {
        this.state = new PendingState(this);
    }

    setState(state) {
        this.state = state;
    }

    proceed() {
        this.state.proceed();
    }

    cancel() {
        this.state.cancel();
    }
}

class PendingState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order is now Shipped.");
        this.order.setState(new ShippedState(this.order));
    }

    cancel() {
        console.log("Order has been canceled.");
        this.order.setState(new CanceledState(this.order));
    }
}

class ShippedState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order is now Delivered.");
        this.order.setState(new DeliveredState(this.order));
    }

    cancel() {
        console.log("Cannot cancel, order is already shipped.");
    }
}

class DeliveredState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order is already delivered.");
    }

    cancel() {
        console.log("Cannot cancel, order is already delivered.");
    }
}

class CanceledState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Cannot proceed, order was canceled.");
    }

    cancel() {
        console.log("Order is already canceled.");
    }
}










const order = new Order();
order.proceed();
order.proceed();
// order.proceed();
order.cancel();
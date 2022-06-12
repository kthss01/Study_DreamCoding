// good
class UserService {
    userDb;
    getUser() {
        return this.userDb.select(/* db query */);
    }
}

class OrderService {
    orderDb;
    createOrder(user, product) {}
    getOrder(orderId) {
        return this.orderDb.select(/* db query */);
    }
    updateOrder(order) {
        this.orderDb.updateOrder(order, PAID);
    }
}

class PaymentService {
    paymentClient;
    processPayment(orderRequest) {
        return paymentClient
            .connet(/* url */)
            .then(/* process payment */)
            .catch(/* retry */);
    }
}

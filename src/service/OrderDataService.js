import http from "../http-common";

class OrderDataService {
    createOrder(data) {

        return http.post(``, data);
    }
    getAllOrders() {
        return http.get("api/v1/orders");
    }
}  export default new OrderDataService();
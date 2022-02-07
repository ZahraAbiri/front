import http from "../http-common";

class OrderDataService {
    createOrder(data) {

        return http.post(`api/v1/orders`, data);
    }
    getAllOrders() {
        return http.get("api/v1/ordersfind");
    }
}  export default new OrderDataService();
import http from "../http-common";

class PaymentServiceData {


    payc(data) {
        console.log(data.customerId+"service")
        return http.post(`cus/payByCard`, data);
    }paycr(data) {
        return http.post(`cus/payByCredit`, data);
    }


}

export default new PaymentServiceData();
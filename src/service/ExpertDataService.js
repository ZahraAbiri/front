import http from "../http-common";
class ExpertDataService {
    createExpert(data) {

        // return ("http://localhost:8080/cus/customers", data);
        return http.post(`exp/experts`, data);
    }
}  export default new ExpertDataService();
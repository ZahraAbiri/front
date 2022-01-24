import http from "../http-common";
class ManagerDataService {
    createManager(data) {

        // return ("http://localhost:8080/cus/customers", data);
        return http.post(`ma/mans`, data);
    }
}  export default new ManagerDataService();
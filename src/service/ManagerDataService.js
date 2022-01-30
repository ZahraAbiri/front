import http from "../http-common";

class ManagerDataService {
    createManager(data) {

        return http.post(`ma/mans`, data);
    }
    getAllManager() {
        return http.get("ma/man");
    }
}  export default new ManagerDataService();
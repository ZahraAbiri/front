import http from "../http-common";
class ExpertDataService {
    createExpert(data) {
console.log(data);
        // return ("http://localhost:8080/cus/customers", data);
        return http.post(`exp/experts`, data);
    }
    getAllexperts() {
        return http.get("exp/expert");
    }
    updateExpert(id, data) {
        console.log("update : "+id+"data : "+data);
        return http.put(`exp/expaddsub/${id}`,data);
    }
}  export default new ExpertDataService();
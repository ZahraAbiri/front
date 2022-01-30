import http from "../http-common";
class SubServiceDataService {
    getSubService() {
        return http.get(`v1/getsubs`);
    }
    createsubservice(data) {
        console.log(data)
        return http.post(`v1/subs`, data);
    }
}  export default new SubServiceDataService();
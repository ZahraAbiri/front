import http from "../http-common";
class SubServiceDataService {
    getSubService() {

        return http.get(`v1/subs`);
    }
}  export default new SubServiceDataService();
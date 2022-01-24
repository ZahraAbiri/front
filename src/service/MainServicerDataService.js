import http from "../http-common";


class MainServiceDataService {
    getMainService() {

        return http.get(`mainService/Mservice`);
    }
}  export default new MainServiceDataService();
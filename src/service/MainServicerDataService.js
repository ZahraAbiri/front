import http from "../http-common";


class MainServiceDataService {
    getMainService() {

        return http.get(`mainService/Mservice`);
    }
    updateMainService(id, data) {
        console.log("update : "+id+"data : "+data);
        return http.put(`mainService/mServ/${id}`,data);
    }
    createMainService(data) {
        console.log("data : "+data);

        return http.post(`mainService/mSer`, data);
    }
}  export default new MainServiceDataService();
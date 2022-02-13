import http from "../http-common";

class ManagerDataService {
    createManager(data) {

        return http.post(`ma/mans`, data);
    }

    getAllManager() {
        return http.get("ma/man");
    }

    getManager(data) {

        return http.post(`ma/findM`, data);
    }

    getCustomer(data) {

        return http.post(`ma/findC`, data);
    }

    getExpert(data) {

        return http.post(`ma/findE`, data);
    }
}

export default new ManagerDataService();
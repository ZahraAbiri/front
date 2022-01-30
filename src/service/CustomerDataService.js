import http from "../http-common";

class CustomerDataService {
    getCustomer(){
        return http.get("");
    }
    getAllCustomer() {
        return http.get("cus/custom");
    }

    getCustomerById(id) {
        return http.get(`/${id}`);
    }

    createCustomer(data) {
        return http.post(`cus/cu`, data);
    }


    updateCustomer(id, data) {
        console.log("update : "+id+"data : "+data);
        return http.put(`/${id}`,data);
    }

    deleteCustomer(id) {
        console.log("id@@@@@@@" + id);
        return http.delete(`/${id}`);
    }

    deleteAllCustomer() {
        return http.delete(``);
    }

}

export default new CustomerDataService();
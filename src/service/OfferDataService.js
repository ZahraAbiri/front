import http from "../http-common";

class OfferDataService {
    getCustomer(){
        return http.get("");
    }
    getAllOffer() {
        return http.get("");
    }

    getCustomerById(id) {
        return http.get(`/${id}`);
    }

    createOffer(data) {
        return http.post(`off/offers`, data);
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

export default new OfferDataService();
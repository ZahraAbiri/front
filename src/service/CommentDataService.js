import http from "../http-common";

class CommentDataService {


    createComment(data) {
        return http.post(`com/comm`, data);
    }


}

export default new CommentDataService();
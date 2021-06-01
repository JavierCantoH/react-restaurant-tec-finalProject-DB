import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/menu");
  }

  get(id) {
    return http.get(`/menu/${id}`);
  }

  create(data) {
    return http.post("/menu", data);
  }

  update(id, data) {
    return http.put(`/menu/${id}`, data);
  }

  delete(id) {
    return http.delete(`/menu/${id}`);
  }

  deleteAll() {
    return http.delete(`/menu`);
  }

  findByIdMenu(id_menu) {
    return http.get(`/menu?id_menu=${id_menu}`);
  }
}

export default new TutorialDataService();
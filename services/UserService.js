import http from "../http-common";

const getAll = () => {
    return http.user.get("/users");
};

const get = (id) => {
    return http.user.get(`/users/${id}`);
};

const create = (data) => {
    return http.user.post("/users/", data);
};

const update = (id, data) => {
    console.log(data);
    return http.user.put(`/users/${id}`, data);
};

const remove = (id) => {
    return http.user.delete(`/users/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};

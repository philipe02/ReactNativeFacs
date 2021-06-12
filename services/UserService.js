import { user } from "../http-common";

const getAll = () => {
    return user.get("/users");
};

const get = (id) => {
    return user.get(`/users/${id}`);
};

const create = (data) => {
    return user.post("/users/", data);
};

const update = (id, data) => {
    console.log(data);
    return user.put(`/users/${id}`, data);
};

const remove = (id) => {
    return user.delete(`/users/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
};

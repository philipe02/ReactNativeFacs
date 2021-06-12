import http from '../http-feed';

const getAll = () => {
    return http.get("/comentario")
}

const get = id => {
    return http.get(`/comentario/${id}`)
}

const create = data => {
    return http.post("/comentario/", data)
}

const update = (id, data) => {
    return http.put(`/comentario/${id}`, data)
}

const remove = id => {
    return http.delete(`/comentario/${id}`)
}

export default {getAll, get, create, update, remove}

import http from '../http-commonMetodologia';

const getAll = () => {
    return http.get('/metodologia')
}

const get = id => {
    return http.get(`/metodologia/${id}`)
}

const create = data => {
    return http.get('/metodologia/', data)
}

const update = (id, data) => {
    return http.put(`/metodologia/${id}`, data)
}

const remove = id => {
    return http.delete(`/metodologia/${id}`)
}

export default {getAll, get, create, update, remove}

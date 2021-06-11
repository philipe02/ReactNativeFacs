import ideas from '../http-commonIdeias'

const getAll = () => {
    return ideas.get("/ideias")
}

const get = id => {
    return ideas.get(`/ideias/${id}`)
}

const create = data => {
    return ideas.post('/ideias/', data)  
}

const update = (id, data) => {
    return ideas.put(`/ideias/${id}`, data)
}

const remove = id => {
    return ideas.delete(`/ideias/${id}`)
}

export default {
    getAll, 
    get,
    create, 
    update, 
    remove
}
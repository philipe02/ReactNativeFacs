import axios from 'axios'

export default axios.create({
    baseURL: "https://60bea5306035840017c1778f.mockapi.io/",
    headers: {
        "Content-type": "application/json"
    }
})

/*
const ideas = () => axios.create({
    baseURL: "https://60b14c0962ab150017ae0c67.mockapi.io/",
    headers: {
        "Content-type": "appication/json"
    }
})

const user = () => axios.create({
    baseURL: "",
    headers: {
        "Content-type": "appication/json"
    }
})

const methodology = () => axios.create({
    baseURL: "https://60bea5306035840017c1778f.mockapi.io/",
    headers: {
        "Content-type": "appication/json"
    }
})

export default {
    ideas,
    user,
    methodology
}

*/

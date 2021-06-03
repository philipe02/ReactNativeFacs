import axios from 'axios'

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
    baseURL: "",
    headers: {
        "Content-type": "appication/json"
    }
})

export default {
    ideas, 
    user,
    methodology
}
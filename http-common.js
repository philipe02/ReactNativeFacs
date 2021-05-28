import axios from 'axios'

export default axios.create({
    baseURL: "https://60b14c0962ab150017ae0c67.mockapi.io/",
    headers: {
        "Content-type": "appication/json"
    }
})
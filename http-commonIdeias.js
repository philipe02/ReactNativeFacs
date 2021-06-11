import axios from 'axios'

export default axios.create({
    baseURL: "https://60b14c0962ab150017ae0c67.mockapi.io/api/v1/",
    headers: {
        "Content-type": "application/json"
    }
})
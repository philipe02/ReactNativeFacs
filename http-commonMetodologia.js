import axios from 'axios';

export default axios.create({
    baseURL: "https://60bea5306035840017c1778f.mockapi.io/",
    headers: {
        "Content-type" : "application/json"
    }
})

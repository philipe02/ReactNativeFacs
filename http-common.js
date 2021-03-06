import axios from "axios";

const ideas = axios.create({
    baseURL: "https://60b14c0962ab150017ae0c67.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

const user = axios.create({
    baseURL: "https://60b57f3efe923b0017c8422c.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

const feed = axios.create({
    baseURL: "https://60bea5306035840017c1778f.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

export default { ideas, user, feed };

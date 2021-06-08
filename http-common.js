import axios from "axios";

export const ideas = axios.create({
    baseURL: "https://60b14c0962ab150017ae0c67.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

export const user = axios.create({
    baseURL: "https://60b57f3efe923b0017c8422c.mockapi.io/",
    headers: {
        "Content-type": "application/json",
    },
});

export const methodology = axios.create({
    baseURL: "",
    headers: {
        "Content-type": "appication/json",
    },
});

import axios from "axios";

const instance = axios.create({
    baseURL: "https://5fc9346b2af77700165ae514.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;
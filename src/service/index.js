import axios from "./instance";

const getProducts = (params) => axios.get("/products", { params });

export { getProducts };
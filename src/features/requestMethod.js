import axios from "axios";

const BASE_URL="https://zublogbackend.onrender.com"


export const publicRequest=axios.create({
    baseURL:BASE_URL,
})
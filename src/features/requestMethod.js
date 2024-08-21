import axios from "axios";

const BASE_URL="https://zublogbackend.onrender.com"
// const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjQxYzVhYWQ2MDg5ODQ0NGE0MTk3ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQ5MzkxNywiZXhwIjoxNjQwNzUzMTE3fQ.YjP4NE4lE_IhnPgfpbA36HaqXPez630Z3V2Oh-OlQj8"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
})
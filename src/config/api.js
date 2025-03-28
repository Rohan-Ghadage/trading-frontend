import axios from "axios"

// -------list of API's---------------
export const API_BASE_URL="http://localhost:5454"

const api = axios.create({
    baseURL : API_BASE_URL,
    headers:{
        "content-Type":"application/json"
    }
})

export default api;
import { api } from "./apiService"

async function login (email, senha){
    return await api.post('/login',{email, senha});
}

export default {
    login
}
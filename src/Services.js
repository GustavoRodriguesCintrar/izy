import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000'
})

export const postQuestion = async (endpoint, body) => {
    const { data } = await api.post(endpoint, body);
    return data;
}

export default api
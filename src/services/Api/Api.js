import axios from 'axios';
import token from '../../pages/login';

const Api = axios.create({
    baseURL: "http://192.168.0.104:3000",
    
    headers: { "permitir" :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDMyNWMzZGI2N2QyNTE2OGE3MjgzNiIsImlhdCI6MTYyNDQ4NjMwNiwiZXhwIjoxNjI0NTcyNzA2fQ.Q9bmuenYEZjz9tduTD7fT6rxUoWnEmhHd_wLktVsaRE` }

})



export default Api;
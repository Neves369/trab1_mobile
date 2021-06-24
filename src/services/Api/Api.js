import axios from 'axios';
// import { getToken } from './Auth';


const Api = axios.create({
    baseURL: "http://192.168.0.104:3000",
    
    headers: { "permitir":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDMyNWMzZGI2N2QyNTE2OGE3MjgzNiIsImlhdCI6MTYyNDU0MzU5MiwiZXhwIjoxNjI0NjI5OTkyfQ.6Lx2RCGWYwf0Ut5EA6eueT51lC2Ta3TYVOrS9tZZjlg` }

})



export default Api;
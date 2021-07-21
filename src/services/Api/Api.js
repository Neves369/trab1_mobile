import axios from 'axios';
// import { getToken } from './Auth';


const Api = axios.create({
    baseURL: "https://backend-curso-react-native.herokuapp.com",
    
    headers: { "permitir":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDMyNWMzZGI2N2QyNTE2OGE3MjgzNiIsImlhdCI6MTYyNjgzMTc1MCwiZXhwIjoxNjI2OTE4MTUwfQ.rgX56o9UnQj1EkOGabMvNj5E5zIdJLSS6Co5MwBp7NM` }

})



export default Api;
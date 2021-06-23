import axios from 'axios';
import token from '../../pages/login';

const Api = axios.create({
    baseURL: "http://192.168.0.105:3000",
    
    headers: { "permitir" :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDI0MmE2Y2EzNDBkNDJkY2QxZTcxNCIsImlhdCI6MTYyNDM5ODMzMSwiZXhwIjoxNjI0NDg0NzMxfQ._Z3c2GcFzV4PGFxXuCaSG2z-Hswa6oD-KRZXv-9cEOU` }

})



export default Api;
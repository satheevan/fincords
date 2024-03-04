import axios from 'axios';
import { Environment } from '../config/environment';


const ApiServices = axios.create({
    baseURL:Environment.baseURL,
    headers:{
        'Content-Type':'application/json',
    },
});

export default ApiServices;
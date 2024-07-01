import settings from './settings.jsx';
import {create} from 'apisauce';

const authURL = create({
    baseURL : settings.LOGIN_BASE_URL,
});

export default authURL;
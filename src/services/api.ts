import axios from 'axios';

const api = axios.create({

    baseURL: 'https://webscraper-back.herokuapp.com'
})

export default api;

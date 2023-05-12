import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    const token = localStorage.getItem('persist:auth')
    return config
}, function (err) {
    // Do something with request error
    console.log(err);
    return Promise.reject(err);
})
export default instance
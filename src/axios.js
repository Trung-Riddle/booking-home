import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    // gán token vào header
    const token = localStorage.getItem('persist:auth')
    return config
}, function (err) {
    // Do something with request error
    console.log(err);
    return Promise.reject(err);
})

// Thêm một bộ đón chặn response
axios.interceptors.response.use(function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    // refresh token
    return response;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });
export default instance
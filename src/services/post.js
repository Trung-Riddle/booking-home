import axiosConfig from '../axios'

export const apiGetPosts = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: '/api/v1/post/all'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})
export const apiGetPostsLimit = async (page) => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: `/api/v1/post/limit?page=${page}`
        })
        return response
    } catch (error) {
        return error
    }
}
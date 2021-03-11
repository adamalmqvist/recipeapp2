import http from '../BackendAPI'
import {iCreatedNewUser} from '../../../shared/interface/interface'

const createUser = (data: iCreatedNewUser) => {
   return http.post('/user', data)
}

const signInUser = (signInData: object) => {
    return http.post("/signIn", signInData)
}

const createPost = (postData : object) => {
    return http.post("/post", postData)
}

const getallPosts = () => {
    return http.get("/post")
}
export default {
    createUser,
    signInUser,
    createPost,
    getallPosts
}
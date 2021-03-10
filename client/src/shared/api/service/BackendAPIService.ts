import http from '../BackendAPI'
import {iCreatedNewUser} from '../../../shared/interface/interface'

const createUser = (data: iCreatedNewUser) => {
   return http.post('/user', data)
}

const signInUser = (signInData: object) => {
    return http.post("/signIn", signInData)
}

export default {
    createUser,
    signInUser
}
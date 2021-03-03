import Usermodel from "../models/User.model.js"
import statusCode from "../../configurations/StatusCode.js"

const createUser = async (request, response) => {

	const user = new Usermodel({
		username: request.body.username,
		password: request.body.password,
		age: request.body.age
    })
    
    try {
        const databaseResponse = await user.save()
        response.status(statusCode.CREATED).send(databaseResponse)
    } catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trying to create user",
            stack: error
        })
    }
}
const getAllUsers = async (request, response) => {
    try {
        const databaseResponse = await Usermodel.find()
        response.status(statusCode.CREATED).send(databaseResponse)
    } catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({ message: error.message})
    }
}

const deleteUser = async (request, response) =>{
    try {
        const userId = request.params.userId
        const databaseResponse = await Usermodel.findByIdAndDelete(userId)
        response.status(statusCode.CREATED).send({message: "Succesfully deleted user", data: databaseResponse})
    }
    catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trycing to delete user with ID " + userId,
            error: error.message
        })
    }
}
const updateUser = async (request, response) => {
    try {
        const userId = request.params.userId
        const data = {
            username: request.body.username,
            password: request.body.password
        }
        const databaseResponse = await Usermodel.findByIdAndUpdate(userId, data, {new: true})
        response.status(statusCode.CREATED).send(databaseResponse)

    }
    catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trycing to update user with ID " + userId,
            error: error.message
        })
    }
}
const queryUsername = async (request, response) => {
    try {
        const databaseResponse = await Usermodel.find({username: request.query.username})
        response.status(statusCode.CREATED).send(databaseResponse)
    }
    catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trying to search user with username " ,
            error: error.message
    })
    }

}
const getUserById = async (request, response) => {
    try {
        const databaseResponse = await Usermodel.findOne({_id: request.params.userId})
        response.status(200).send(databaseResponse)
    }
    catch (error) {
        response.status(500).send({
            message: "error while trying to search user with ID " ,
            error: error.message
    }) 
    }
}


export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    queryUsername,
    getUserById
}
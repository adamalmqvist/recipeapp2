import Usermodel from "../models/User.model.js"
import statusCode from "../../configurations/StatusCode.js"
import jwt from "jsonwebtoken"

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
            message: "error while trying to delete user with ID " + userId,
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
const signInUser = async (request, response) => {
   
    
    try {
      const databaseResponse = await Usermodel.findOne({
        username: request.body.username
      });
      console.log(databaseResponse)
      if (!databaseResponse)
        return response.status(400).json({
          message: "User Not Exist"
        });

    
      
      console.log(request.body.password)
      console.log(databaseResponse.password)
      
      if(request.body.password !== databaseResponse.password) {
        console.log("invalid password")
        return response.status(401).send({
            token: null,
            message: "Invalid Password!"
          }); 
      }
        console.log("THIS IS THE USER:", databaseResponse)
        const token = jwt.sign({ id: databaseResponse._id }, "jwtSecret.secret", { expiresIn: 60 * 60 });
        console.log(token)
        const username = databaseResponse.username 
         response.status(200).send({
            username,
            token,
            message: 'user found & logged in',
            auth: true
        });
    
    } catch (e) {
      console.error(e);
      response.status(500).json({
        message: "Server Error"
      });
    }
  }



export default {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    queryUsername,
    getUserById,
    signInUser
}
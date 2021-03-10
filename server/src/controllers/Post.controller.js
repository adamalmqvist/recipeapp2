import postModel from '../models/post.model.js'
import statusCode from "../../configurations/StatusCode.js"

const createPost = async (request, response) => {
    const post = new postModel({
        title: request.body.title,
        duration: request.body.duration,
        ingrediens: request.body.ingrediens,
        description: request.body.description
    })
    try{
        const databaseResponse = await post.save()
        response.status(statusCode.CREATED).send(databaseResponse)
    }
    catch(error){
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trying to create post",
            stack: error
        })
    }
}

const getAllPosts = async (request, response) => {
    try {
        const databaseResponse = await postModel.find()
        response.status(statusCode.CREATED).send(databaseResponse)
    } catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({ message: error.message})
    }
}

const deletePost = async (request, response) =>{
    try {
        const postId = request.params.postId
        const databaseResponse = await postModel.findByIdAndDelete(postId)
        response.status(statusCode.CREATED).send({message: "Succesfully deleted post", data: databaseResponse})
    }
    catch (error) {
        response.status(statusCode.INTERNAL_SERVER_ERROR).send({
            message: "error while trycing to delete post with ID " + postId,
            error: error.message
        })
    }
}
export default {
    createPost,
    getAllPosts,
    deletePost
}
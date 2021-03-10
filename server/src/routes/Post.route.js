import postController from '../controllers/Post.controller.js'

const routes = application => {
    application.post ("/post", postController.createPost)
    application.get ("/post", postController.getAllPosts)
    application.delete("/post/:postId", postController.deletePost)
}
export default {routes}
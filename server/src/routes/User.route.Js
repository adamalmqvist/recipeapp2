import userController from "../controllers/User.controller.js"

const routes = application => {
    application.post("/user", userController.createUser)
    application.get("/user", userController.getAllUsers)
    application.delete("/user/:userId", userController.deleteUser)
    application.put("/user/:userId", userController.updateUser)
    application.get("/search", userController.queryUsername)
    application.get("/searchuser/:userId", userController.getUserById)
}
export default {routes}

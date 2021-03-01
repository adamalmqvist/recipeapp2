import userController from "../controllers/User.controller.js"

const routes = application => {
    application.post("/user", userController.createUser)
    application.get("/user", userController.getAllUsers)
}
export default {routes}
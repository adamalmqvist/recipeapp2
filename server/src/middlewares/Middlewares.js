import dotenv from "dotenv"
import statusCode from "../../configurations/StatusCode.js"
dotenv.config()
const {ENVIROMENT} = process.env
const notFound = (request, response, next) => {
	const error = new Error("Invalid URL - NOT FOUND" + request.originalUrl)
	response.status(statusCode.NOT_FOUND)
	next(error)
}


const errorHandler = (error, request, response, next) => {
	const statusCode = response.statusCode === statusCode.OK ? statusCode.INTERNAL_SERVER_ERROR : response.statusCode
	response.status(statusCode)
	response.json({
		statusCode : statusCode,
		message : error.message,
		stackTrace: ENVIROMENT === "PRODUCTION" ? null : error.stack
	})
}

export default {
	notFound,
	errorHandler
}
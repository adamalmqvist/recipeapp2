import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
const { DATABASE_URL, PORT } = process.env

const connectToDatabase = async () => {
	try {
		await mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
		console.log("Sucessfully connected to the database")
	} catch (error) {
		console.log("Error while trying to connect to the database: " + error)
		process.exit()
	}
}

const connectToPort = (application) => {
	application.listen(PORT, () => {
		console.log("Server is running at port " + 3001)
	})
}

export default {
	connectToDatabase,
	connectToPort
}

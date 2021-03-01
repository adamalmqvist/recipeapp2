import mongoose from "mongoose"
const { Schema, model } = mongoose

const userSchema = Schema({
	username: {
		type: String,
		unique: true,
		allowNull: false,
		required: true,
	},
	age: {
		type: Number,
		min: [18, "you need to be above 18"],
		max: [90,"Sorry"],
		required: false
	},
	password: {
		type: String,
		required: true
	}
}, {timestamps: true})
const Usermodel = model("user", userSchema)
export default Usermodel
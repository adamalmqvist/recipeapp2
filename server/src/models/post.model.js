import mongoose from "mongoose"
const { Schema, model } = mongoose

const postSchema = Schema({
    title: String,
    duration: String,
    ingrediens: String,
    description: String,
    
}, {
    timestamps: true
});

const postModel = model("post", postSchema) 
export default postModel
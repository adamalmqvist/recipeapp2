import BackendAPIService from '../../shared/api/service/BackendAPIService'
import {useState} from 'react'
import './PostView.css'

export const PostView= () => {
    const [newPost, setNewPost] = useState<any>({
        title: 'random',
        duration: 'random',
        ingredients: "random",
        description: "random"
    })
    return (
        <div>
               <div className="CreateUserView-container"> 
           <form>
           <div className="input-container">
           <input 
            className="input"
            placeholder="title" 
            name="title"
            onChange={(event) => setNewPost({...newPost, title: event.target.value})} /> <br/>
           </div>

           <div className="input-container">
           <input 
            className="input"
            placeholder="duration" 
            name="duration"
            onChange={(event) => setNewPost({...newPost, duration: event.target.value})} /> <br/>
           </div>

           <div className="input-container">
           <textarea 
            className="textArea"
            placeholder="ingredients" 
            name="ingrediens"
            onChange={(event) => setNewPost({...newPost, ingrediens: event.target.value})} /> <br/>
           </div>
            
           <div className="input-container">
           <textarea 
            className="textArea"
            placeholder="description" 
            onChange={(event) => setNewPost({...newPost, description: event.target.value})} />
           <button className="btn" onClick={() => BackendAPIService.createPost(newPost)}>Create Post</button>
           </div>
           </form>
        </div>
        </div>
    )
}
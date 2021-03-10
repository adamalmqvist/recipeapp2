import BackendAPIService from '../../shared/api/service/BackendAPIService'
import {useState} from 'react'
import {iCreatedNewUser} from "../../shared/interface/interface"
import './CreateUserView.css'

export const CreateUserView = () => {
    const [newUser, setNewUser] = useState<iCreatedNewUser>({
        username: 'adam23',
        password: 'hemligt'
    })
    return (
        <div>
               <div className="CreateUserView-container"> 
           <form>
           <div className="input-container">
           <input 
            className="input"
            placeholder="Username" 
            name="username"
            onChange={(event) => setNewUser({...newUser, username: event.target.value})} /> <br/>
           </div>
            
           <div className="input-container">
           <input 
            className="input"
            type="password"
            placeholder="Password" 
            name="password"
            onChange={(event) => setNewUser({...newUser, password: event.target.value})}/>
           <button className="btn" onClick={() => BackendAPIService.createUser(newUser)}>Create user</button>
           </div>
           </form>
        </div>
        </div>
    )
}

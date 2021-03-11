import { useState, useContext } from 'react'
import { loginCredentials } from '../../shared/interface/interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import {UserContext} from '../../shared/provider/UserProvider'
import './LoginView.css'
import backendAPIService from '../../shared/api/service/BackendAPIService'
import { ServerResponse } from 'http'

export const LoginView = () => {
    const history = useHistory()
    const [loginUsername, setLoginUsername] = useState<string>('')
    const [loginPassword, setLoginPassword] = useState<string>('')
    const [serverData, setServerData] = useState<any>()
    const [serverDataMessage, setServerDataMessage] = useState<any>("")
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  

 
  


    const signIn =  async() => {
       try{
       const response = await backendAPIService.signInUser({username: loginUsername,password: loginPassword})
       setAuthenticatedUser(response)
       console.log(authenticatedUser)
       }
       catch(error) {
           console.log(error)
        }
    }
    
    return (
        <div className="loginView-container"> 
           <p>{serverDataMessage}</p>

           <form>
           <div className="input-container">
           <input 
            className="input"
            placeholder="Username" 
            name="username"
            onChange={e => setLoginUsername(e.target.value)} /> <br/>
           </div>
           
           <div className="input-container">
           <input 
            className="input"
            type="password"
            placeholder="Password" 
            name="password"
            onChange={e => setLoginPassword(e.target.value)}/>
           <button className="btn" onClick={() => signIn()}>Sign in</button>
           </div>
          </form>
       </div>
    )
}
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
    
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  

    const serverResponse = (response: any) =>{
        setServerData(response.data)
        localStorage.setItem("JWT", response.data.token)
        setAuthenticatedUser(serverData)
       
    }
      console.log(authenticatedUser)

    const signIn =  () => {
       backendAPIService.signInUser({username: loginUsername,password: loginPassword})
       .then(response => serverResponse(response))
       .catch(error => console.log(error))
       .finally(() => console.log(authenticatedUser))
    }
  
    
    return (
        <div className="loginView-container"> 
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
import { useState, useContext } from 'react'
import { loginCredentials } from '../shared/interface/interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {UserContext} from '../shared/provider/UserProvider'

export const LoginView = () => {
    const history = useHistory()
    const [loginCredentials, setloginCredentials] = useState<loginCredentials>({username: '', password: ''})
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const setloginCredentialsFunction = (e : any) => {
        setloginCredentials({...loginCredentials, [e.target.name]: e.target.value})
}
     

    const signIn = () => {
        localStorage.setItem("user", loginCredentials.username)
        setAuthenticatedUser(loginCredentials)
        history.push(RoutingPath.homeView)
    }
    return (
        <div> 
           <form>
            <input 
            placeholder="Username" 
            name="username"
            value={loginCredentials.username}
            onChange={setloginCredentialsFunction} /> <br/>
            <input type="password"
            placeholder="Password" 
            name="password"
            value={loginCredentials.password}
            onChange={setloginCredentialsFunction}/>
            <button onClick={() => signIn()}>Sign in</button>
            </form>
        </div>
    )
}
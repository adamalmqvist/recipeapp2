import { useState } from 'react'
import { loginCredentials } from '../shared/interface/interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const LoginView = () => {
    const history = useHistory()
    const [loginCredentials, setloginCredentials] = useState<loginCredentials>({username: '', password: ''})
    const signIn = () => {
        history.push(RoutingPath.homeView)
        localStorage.setItem("user", loginCredentials.username)
    }
    return (
        <div>
           <form>
            <input 
            placeholder="Username" 
            onChange={event => setloginCredentials({...loginCredentials, username: event.target.value})}/> <br/>
            <input
            placeholder="Password"
            onChange={event => setloginCredentials({...loginCredentials, password: event.target.value})}/>
            <button onClick={() => signIn()}>Sign in</button>
            </form>
        </div>
    )
}
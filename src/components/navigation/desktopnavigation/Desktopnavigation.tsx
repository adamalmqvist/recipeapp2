import './Desktopnavigation.css'
import Logotype from '../../../shared/images/foodlogo.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'

export const Desktopnavigation = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displaySignInButtonIfUserIsAuthenticated = () => {
        
       return authenticatedUser
       ? <Profile/> 
       : <span onClick={() => history.push(RoutingPath.loginView)}>Login</span>
           
    }

    return (
        <div className="desktopNavigationContainer">
            <img className="navigationLogotype" alt="Error..." src={Logotype}></img>
            <span onClick={() => history.push(RoutingPath.homeView)}>Home</span>
            <span onClick={() => history.push(RoutingPath.postView)}>Post Recipe</span>
            {displaySignInButtonIfUserIsAuthenticated()}
        </div>
    )
}

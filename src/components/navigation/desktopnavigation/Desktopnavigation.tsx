import './Desktopnavigation.css'
import Logotype from '../../../shared/images/foodlogo.svg'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const Desktopnavigation = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displaySignInButtonIfUserIsntAuthenticated = () => {
        
       return authenticatedUser
          ? <div className="profile"><Profile/> </div>
          : <span className="signInButton" onClick={() => history.push(RoutingPath.loginView)}>Login</span>
           
    }

    return (
        <div className="desktopNavigationContainer">
            <img className="navigationLogotype" alt="Error..." src={Logotype}></img>
            <div className="deskotopNavigationTabs">
            <DesktopNavigationTabs/>
            </div>
            {displaySignInButtonIfUserIsntAuthenticated()}
        </div>
    )
}

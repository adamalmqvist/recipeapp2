import React from 'react'
import './Navigation.css'
import {Mobilenavigation} from './mobilenavigation/Mobilenavigation'
import {Desktopnavigation} from './desktopnavigation/Desktopnavigation'
import {useWindowDimention} from '../../hooks/useWindowDimention'
import { DesktopNavigationTabs } from './desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs'
import { useContext,  } from 'react'
import { useHistory } from 'react-router-dom'
import {Profile} from '../../components/profile/Profile'
import RoutingPath from '../../../src/routes/RoutingPath'
import { UserContext } from '../../../src/shared/provider/UserProvider'



export const Navigation = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displaySignInButtonIfUserIsntAuthenticated = () => { 
       return authenticatedUser
          ? <div className="profile"><Profile/> </div>
          : <span className="signInButton" onClick={() => history.push(RoutingPath.loginView)}>Sign In</span>
    }

    const { height, width } = useWindowDimention()
    const displayNavigationDependingOnDevice = () => {
        return (width <= 1000)
        ? <Mobilenavigation/>
        : <Desktopnavigation/>
    }
    
    return (
        <div className="navigationContainer">
            {displayNavigationDependingOnDevice()}
            {displaySignInButtonIfUserIsntAuthenticated()}
        </div>
    )
}


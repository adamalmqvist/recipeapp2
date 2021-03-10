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
import userEvent from '@testing-library/user-event'



export const Navigation = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)


    const { height, width } = useWindowDimention()
    const displayNavigationDependingOnDevice = () => {
        return (width <= 1000)
        ? <Mobilenavigation/>
        : <Desktopnavigation/>
    }
    
    return (
        <div className="navigationContainer">
            {displayNavigationDependingOnDevice()} 
            {
                authenticatedUser.auth
                ? <div className="profile"><Profile/> </div>
                : <div className="divButton"><span className="signInButton" onClick={() => history.push(RoutingPath.loginView)}>Sign In</span><span className="CreateUserButton" onClick={() => history.push(RoutingPath.createUserView)}>Create User</span></div>
            }
        </div>
    )
}


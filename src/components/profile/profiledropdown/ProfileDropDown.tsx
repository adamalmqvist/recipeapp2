import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import './ProfileDropDown.css'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
    const history = useHistory()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const logOut = () => {
        setAuthenticatedUser(false)
        localStorage.removeItem("user")
        history.push(RoutingPath.homeView)
     }

    return (
        <div className="profileDropdown">
           <span onClick={() => logOut()}>
               logout
           </span>
       </div>
    )
}

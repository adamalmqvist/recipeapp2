import { useContext } from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import '../profile/Profile.css'
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    return (
        <div className="profileWrapper">
            <img src="https://thispersondoesnotexist.com/image" alt="" className="profileImg"/>
            <div className="usernameP">{authenticatedUser.username}</div>
            <ProfileDropDown/>
        </div>
    )
}

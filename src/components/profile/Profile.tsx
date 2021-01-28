import { useContext } from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import '../profile/Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <div className="profileWrapper">
            <img src="https://thispersondoesnotexist.com/image" alt="" className="profileImg"/>
            <div className="usernameP">{authenticatedUser.username}</div>
            <div className="profileDropdown">
                <span>
                    logout
                </span>

            </div>



        </div>
    )
}

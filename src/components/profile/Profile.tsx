import { useContext } from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import '../profile/Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <div>
            <img src="https://thispersondoesnotexist.com/image" alt="" className="profileImg"/>

            {authenticatedUser.username}
        </div>
    )
}

import { useState, createContext } from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: {children: React.ReactChild}) => {
    const [authenticatedUser, setAuthenticatedUser] = useState({})
    const {children} = props
    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}

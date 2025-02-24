import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    id:'123',
    name: 'Fernando Herrera',
    email: 'fernando@google.com'
} */

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

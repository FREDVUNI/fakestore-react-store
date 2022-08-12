import {createContext} from 'react'

const UserContext = createContext()

export function UserProvider({children}){
    
    let isLoggedIn = JSON.parse(localStorage.getItem('LoggedIn')) 
        ? JSON.parse(localStorage.getItem('LoggedIn')) : ''
    
    return(
        <UserContext.Provider value={{isLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}
 
export default UserContext
import { useState } from "react"
import { createContext } from "react"


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [show,setShow]=useState(false)
    const [currentUser,setCurrentUser]=useState(false)

  return (
    <AuthContext.Provider value={{currentUser,setShow,show}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
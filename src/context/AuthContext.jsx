import { createContext, useState } from "react";

export const AuthContextt = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const users = localStorage.getItem("user")
        return users ? JSON.parse(users) : null
    })
    const login = (token, role) => {
        const userData = { token, role };
        setUser(userData)
        localStorage.setItem("user",JSON.stringify(userData))
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }
    return (
        <AuthContextt.Provider value={{user,login,logout}}>
            {children}
        </AuthContextt.Provider>
    )
}
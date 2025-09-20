import { useContext } from "react"
import { AuthContextt } from "../context/AuthContext"
import { Navigate } from "react-router-dom"

function ProtectedRout({ children, role }) {
    const { user } = useContext(AuthContextt)
    if (!user) return <Navigate to={'/login'} />
    if (role && user.role !== role ) return <Navigate to={'/'} />
    return children
}

export default ProtectedRout

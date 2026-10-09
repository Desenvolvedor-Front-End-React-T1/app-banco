import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function PrivateRoute() {

    const { user } = useAuth()

    // redireciona para login caso o usuario não esteja logado
    // if (!user) {
    //     return <Navigate to="/login"/> 
    // }

    return <Outlet />
}

export default PrivateRoute
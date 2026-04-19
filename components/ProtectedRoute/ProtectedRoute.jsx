import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context.jsx";
import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
    const { token } = useContext(AuthContext)
    const location = useLocation();
    if (!token) {
        return <Navigate to="/login" state={ { from: location }  } />
    } else {
        return children
    }
}
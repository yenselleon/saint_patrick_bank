import { Navigate } from 'react-router-dom';


export const PublicRoute = ({ children, isLogin }) => {

    /* const { user } = useContext(AuthContext ) */
    

    return isLogin
        ? <Navigate to="/" />
        : children
}
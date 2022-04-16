import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, isLogin }) => {

  /* const { user } = useContext(AuthContext ) */
  

  return isLogin
      ? children
      : <Navigate to="/login" />
}
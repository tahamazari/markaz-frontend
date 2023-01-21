
import { Navigate } from "react-router";
import { isLoggedIn } from "../utils" 

const PrivateRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
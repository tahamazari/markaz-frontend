import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings"

import PrivateRoute from "./PrivateRoute"
import { isLoggedIn } from "../utils";

const privateRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/settings',
    element: <Settings />
  }
]

const Navigation = () => {
  return (
    <Router>
      <Routes>
        {
          privateRoutes.map(({ path, element }, index) => {
            return(
              <Route
                key={index} 
                path={path}
                element={
                  <PrivateRoute>
                    {element}
                  </PrivateRoute>
                } 
              />
            )
          })
        }
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={isLoggedIn() ? <Navigate to="/dashboard"/>: <Login />} />
      </Routes>
    </Router>
  );
}

export default Navigation
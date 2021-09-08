import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/auth-selectors";

function PrivateRoute ({ 
    children, 
    redirectTo = "/contacts",
     ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <Route {...routeProps}>
        {isLoggedIn ? children : <Redirect to={ redirectTo } />}
        </Route>
    )

};

export default PrivateRoute;
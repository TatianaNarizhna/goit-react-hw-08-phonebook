import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors  from "../../redux/auth/auth-selectors";


 function AppBar() {
     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header>
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};

export default AppBar;
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import authSelectors  from "../../redux/auth/auth-selectors";
import s from "../AppBar/AppBar.module.css"


 function AppBar() {
     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.Header}>
            <div className={s.NavigContainer}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
            </div>
        </header>
    )
};

export default AppBar;
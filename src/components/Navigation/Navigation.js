import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

   return (
      <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
       </NavLink>

       {isLoggedIn && (
          <NavLink to="/contacts" exact className={s.link} activeClassName={s.activeLink}>
          Contacts
        </NavLink> 
       )} 
    </nav>
   )
}

export default Navigation;
import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Home
       </NavLink>

       <NavLink to="/contacts" exact className={s.link} activeClassName={s.activeLink}>
          Contacts
        </NavLink>  

       {/* <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
          Register
       </NavLink>

       <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
          Login
       </NavLink> */}
       {/* <hr /> */}
    </nav>
);

export default Navigation;
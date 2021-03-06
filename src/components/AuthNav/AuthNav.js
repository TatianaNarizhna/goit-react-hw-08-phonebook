import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "../AuthNav/AuthNav.module.css";

 function AuthNav() {
    return (
      <div>
        <NavLink
          to="/register"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Login
        </NavLink>
 
      </div>
    );
  }

  export default AuthNav;
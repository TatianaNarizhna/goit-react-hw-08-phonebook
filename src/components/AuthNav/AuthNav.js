import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./AuthNav.module.css";

 function AuthNav() {
    return (
      <div>
        <NavLink
          to="/register"
          exact
          style={s.link}
          activeStyle={s.activeLink}
        >
          Регистрация
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={s.link}
          activeStyle={s.activeLink}
        >
          Логин
        </NavLink>
      </div>
    );
  }

  export default AuthNav;
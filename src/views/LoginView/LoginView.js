import { useState } from "react";
import { useDispatch } from "react-redux";
import  authOperations  from "../../redux/auth/auth-operations";
import s from "./LoginView.module.css";


function LoginView() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('')
  }

    return (
      <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} style={s.form} autoComplete="off">
        <label style={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Enter</button>
      </form>
    </div>
    )
};


export default LoginView;
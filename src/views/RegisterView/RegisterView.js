import { useState } from "react";
import { useDispatch } from "react-redux";
import  authOperations  from "../../redux/auth/auth-operations";
import s from "./RegisterView.module.css";
 
 function RegisterView() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
     switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
   };


    return (
        <div>
      <h1>Register Page</h1>

      <form onSubmit={handleSubmit} style={s.form} autoComplete="off">
        <label style={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
    )
}

export default RegisterView;
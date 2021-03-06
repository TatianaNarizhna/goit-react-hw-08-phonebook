import Button from '@material-ui/core/Button';
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
      <div className={s.LoginContainer}>
      <h2 className={s.title}>Login page</h2>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className ="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"/>
          Email
          <input
            type="email"
            name="email"
            value={email}
            className="form-control" 
             placeholder="name@example.com"
            onChange={handleChange}
          />
        </div>
     

    <div className="mb-3">
    <label className={s.label} />
          Password
          <input
            type="password"
            name="password"
            value={password}
            className="form-control" 
            placeholder="more then 5 symbols"
            onChange={handleChange}
          />
        
    </div>
        <Button type="submit" variant="contained" color="primary">
            Enter
          </Button>
      </form>
    </div>
    )
};


export default LoginView;
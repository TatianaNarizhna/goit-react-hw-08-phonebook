import Button from '@material-ui/core/Button';
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
        <div className={s.RegisterContainer}>
      <h2 className={s.title}>Register Page</h2>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label"/>
          Name
          <input 
          type="text" 
          name="name" 
          value={name} 
          className="form-control" 
            placeholder="please, enter your name"
          onChange={handleChange} />
  
        </div>
       

  <div className="mb-3">
  <label className={s.label} />
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

        <Button type="submit" variant="contained" color="primary" >
            Register
          </Button>
      </form>
    </div>
    )
}

export default RegisterView;
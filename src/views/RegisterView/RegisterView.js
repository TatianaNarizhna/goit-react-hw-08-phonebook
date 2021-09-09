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
        <div class="mb-3">
        <label className={s.label} for="exampleFormControlInput1" class="form-label"/>
          Name
          <input 
          type="text" 
          name="name" 
          value={name} 
          class="form-control" 
            id="exampleFormControlInput1"
            placeholder="please, enter your name"
          onChange={handleChange} />
  
        </div>
       

  <div class="mb-3">
  <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            class="form-control" 
            id="exampleFormControlInput1"
             placeholder="name@example.com"
            onChange={handleChange}
          />
        </label>
  </div>

     <div class="mb-3">
     <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            class="form-control" 
            id="exampleFormControlInput1" 
            placeholder="more then 5 symbols"
            onChange={handleChange}
          />
        </label>
     </div>

        <Button type="submit" variant="contained" color="primary" >
            Register
          </Button>

        {/* <button type="submit">Register</button> */}
      </form>
    </div>
    )
}

export default RegisterView;
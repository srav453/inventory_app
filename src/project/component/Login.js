import classes from './Login.module.css';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Login = (props) => {
    const [enteredusername, setEnteredUsername] = useState("");
    const [enteredPassword, setEnteredPassword] = useState('');
  const [usernameisvalid, setUsernameisvalid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
    setFormIsValid(
      event.target.value 
         );
        };
        const passwordChangeHandler = (event) => {
            setEnteredPassword(event.target.value);
            setFormIsValid(
                event.target.value.trim().length > 6 && enteredusername);
        };
        const validateUsernameHandler= () => {
            setUsernameisvalid(enteredusername);
        };
        const validatePasswordHandler = () => {
            setPasswordIsValid(enteredPassword.trim().length > 6);
          };
        
          const submitHandler = (event) => {
            event.preventDefault();
            props.onLogin(enteredusername, enteredPassword);
          };
          return (
            <Card 
            className={classes.login}>
              <form onSubmit={submitHandler}>
                <div
                  className={`${classes.control} ${
                    usernameisvalid === false ? classes.invalid : ''
                  }`}
                >
                    <label htmlFor='username'>Username</label>
                    <input
                    type="username"
                    id="username"
                    value={enteredusername}
                    onChange={usernameChangeHandler}
                    onBlur={validateUsernameHandler}
                    />
                    </div>
                    <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button 
          type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
          

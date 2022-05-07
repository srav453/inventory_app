import React, { useState } from "react";
import './Login.css';
import axios from "axios";
const Loginpage =()=>{
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handdleChange = e => {
        const { name, value } = e.target
        console.log(name, value);
        setUser({
            ...user, 
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:3000/login", user)
        .then(res => console.log(res))
    }
    return (
        <div className="login">
            <h2>Welcome to Login Page</h2>
            <input type="text" name="email" value={user.email} 
            placeholder="Enter your email" onChange={handdleChange} ></input>
            
            <input type="password" name="password" value={user.password} 
            placeholder="Enter your password" onChange={handdleChange}></input>
            
            <div className="button" onClick={login}>Login</div>
            {/* <div>or</div>
            <div className="button">Register</div> */}
        
        </div>
    );
}
export default Loginpage;
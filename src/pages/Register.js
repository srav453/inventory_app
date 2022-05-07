import React, {useState } from "react";
import './Register.css';
import axios from "axios";
const Register =()=>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handdleChange = e => {
        const { name, value } = e.target
        console.log(name, value);
        setUser({
            ...user, 
            [name]: value
        })
    }
    const register =()=> {
        const {name, email, password, confirmpassword} = user;
        if(name && email && password && (password === confirmpassword)){
            // alert("entered correctly");
        axios.post("http://localhost:3000/register", user)
        .then(res => console.log(res))
    }
    else {
        alert("inavali input")
    }
}
    return (
        <div className="register">
            {console.log("User", user)}
            <h2>Welcome to Registration Page</h2>
            <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handdleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handdleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={handdleChange}></input>
            <input type="password" name="confirmpassword" value={user.confirmpassword} 
            onChange={handdleChange} placeholder="Enter your confirm password"></input>
            {/* <div className="button">Login</div>
            <div>or</div> */}
            <div className="button" onClick={register} >Register</div>
        </div>
    );
}
export default Register;
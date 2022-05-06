import React from "react";
import { NavLink } from "react-router-dom";
import NewLogin from "./NewLogin";


const Register = ()=> {
    return (
        <section className="Registration Page">
            <div className="container mt-2">
                <div className="Registration Page-content">
                    <div className="Registration Page-form">
                        <h2 className="form-title">Registration Page</h2>
                        <form className="Registration Page-form" id="Register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i class ="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i class = "zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off" placeholder="Your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNo">
                                    <i class = "zmdi zmdi-phone-in-talk material-icons-name"></i>
                                </label>
                                <input type="number" name="phoneno" id="phoneno" autoComplete="off" placeholder="Your phoneNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                    <i class = "zmdi zmdi-slideshow material-icons-name"></i>
                                </label>
                                <input type="work" name="work" id="work" autoComplete="off" placeholder="Your profession" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class = "zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i class = "zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off" placeholder="confirm your password" />
                            </div><br />
                            <div className="form-group form-button">
                                 <input type="submit" name="Register" id="Register" className="form-submit" value="Register"></input>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </section>

    )
}
export default Register;
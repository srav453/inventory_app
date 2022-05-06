import React, { useState, useEffect } from 'react';
import Mainfile from './Mainfile';
import Home from './../pages/Home';
import Login from '../pages/Login';
const Login2 = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isInventory, setIsInventory] = useState(false);
    const [isContact, setIsContact] = useState(false);
    //Side effects are basically anything that affects something outside of the scope of the current function
    //that's being executed.
    //useEffect Hook:tell React that your component needs to do something after render.
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
      const storedAboutInfo = localStorage.getItem("isAbout");
      const storedInventoryInfo = localStorage.getItem("isInventory");
      const storedContactInfo = localStorage.getItem("isContact");
      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
      if (storedAboutInfo === "1") {
          setIsAbout(true);
      }
      if (storedInventoryInfo === "1") {
          setIsInventory(true);
      }
      if (storedContactInfo === "1") {
          setIsContact(true);
      }
    }, []);  
    const loginHandler = (username, password) => {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    };
    const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("isAbout");
      localStorage.removeItem("isInventory");
      localStorage.removeItem("isContact");
      setIsLoggedIn(false);
      setIsAbout(false);
      setIsInventory(false);
      setIsContact(false);
    };
    function updateAbout() {
      localStorage.setItem("isAbout", "1"); 
      setIsAbout(true);
      setIsInventory(false);
      setIsContact(false);
    }
    function updateInventory() {
      localStorage.setItem("isInventory", "1"); 
      setIsAbout(false);
      setIsInventory(true);
      setIsContact(false);
    }
    function updateContact() {
      localStorage.setItem("isContact", "1"); 
      setIsAbout(false);
      setIsInventory(false);
      setIsContact(true);
    }
     return (
      <React.Fragment>
        <Mainfile 
        isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        {/* AboutAttr={updateAbout}
        InventoryAttr={updateInventory}
        ContactAttr={updateContact}  */}
        <main>
          {!isLoggedIn && <Login 
          onLogin={loginHandler} />}
          {isLoggedIn && !isAbout && !isInventory && !isContact&&( <Home 
          onLogout={logoutHandler} />)}
{/*           
      {isAbout && !isInventory && <About />}
      {isInventory && !isAbout  && <Inventory />}
      {isLoggedIn && isContact && <Contact />} */}
      
      </main>
   </React.Fragment>
    );
  }
  export default Login2;
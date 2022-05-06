import React from 'react';
import classes from './Navigation.module.css';
const Navigation = (props) => {
  function About() {
    props.AboutAttr();
  }
  function Inventory() {
    props.InventoryAttr();
  }
  function Contact (){
    props.ContactAttr();
  }
  return (
    <nav className={classes.nav}>
      <ul>
      {props.isLoggedIn && (
          <li>
             {/* <a href="/">Homepage</a> */}
            <a href="/">Home</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            {/* <div onClick={About}>About</div> */}
            {/* <a href="/">Home</a> */}
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            {/* <div href='/' onClick={Inventory}>Inventory</div> */}
            {/* <a href="/">About</a> */}
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            {/* <div href='/' onClick={Contact}>Contact</div> */}
            {/* <a href="/">Inventory</a> */}
          </li>
        )}
        {/* {props.isLoggedIn && (
          <li>
            <a href="/">Contact</a>
          </li>
        )} */}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
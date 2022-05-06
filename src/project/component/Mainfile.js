import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const Mainfile = (props) => {
  return (
    <header className={classes['main-header']}>
      
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} 
    //   AboutAttr={props.AboutAttr}
    //   InventoryAttr={props.InventoryAttr}
    //   ContactAttr={props.ContactAttr}
  />
    </header>
  );
};

export default Mainfile;

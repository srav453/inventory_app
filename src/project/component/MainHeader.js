import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
        <li>
            
            <NavLink activeClassName={classes.active} to ="/">Register</NavLink>
              </li>
        <li>
            
        <NavLink activeClassName={classes.active} to ="/NewLogin">NewLogin</NavLink>
          </li>
          <li>
            
            <NavLink activeClassName={classes.active} to ="/Home">Home</NavLink>
              </li>
    
          <li>
            <NavLink  to='/About'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/Inventory'>
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to='/Contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
import { Link } from 'react-router-dom';
import classes from './MainHeader.module.css';
const MainHeader1=(props)=>{
    return (
       
        <header className={classes['main-header']}>
            <Link isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />

        </header>
    );
}
export default MainHeader1;
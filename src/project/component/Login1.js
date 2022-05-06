// import React, { useState, useEffect } from 'react';
// import Home from '../pages/Home';
// import Login from './Login';
// import MainHeader1 from './MainHeader1';
// function Login1() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     useEffect(() => {
//         const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
//         if (storedUserLoggedInInformation === "1") {
//             setIsLoggedIn(true);
//           }
//     }, []);
//     const loginHandler = (username, password) => {
//         localStorage.setItem("isLoggedIn", "1");
//         setIsLoggedIn(true);
//       };
//       const logoutHandler = () => {
//         localStorage.removeItem("isLoggedIn");
//         setIsLoggedIn(false);
//       };
//       return (
//               <React.Fragment>
//             <MainHeader1
//             isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//             <main>
//             {!isLoggedIn && <Login 
//         onLogin={loginHandler} />}
//         {isLoggedIn && (<Home onLogout={logoutHandler}/>)}
//         </main> 
//         </React.Fragment>
//       );
// } 
// export default Login1;
import './App.css';
import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './project/pages/Home';
import Inventory from './project/pages/Inventory';
import About from './project/pages/About';
import Contact from './project/pages/Contact';
import NewLogin from './project/pages/NewLogin';
//import Register from './project/pages/Register';
import MainHeader from './project/component/MainHeader';
import Register from './project/pages/RegistartionPage';

function App() {
  // const ctx = useContext(AuthContext);
  return (
    <div className='App'>
    <Routes>
    <Route path='/' exact element={<NewLogin />}/>
   <Route path='/newlogin'  element={<NewLogin />} />
   <Route path='/mainheader'  element={<MainHeader />}/>
   <Route path='/register' element={<Register />}/>
   <Route path='/inventory' element={<Inventory />}/>
   <Route path='/about' element={<About />}/>
   <Route path='/contact' element={<Contact />}/>
          {/* {!ctx.isLoggedIn && <Route path='/' exact element={<Login />} />}
          {ctx.isLoggedIn  && <Route path='/' exact element={<Home />} />} */}
        </Routes>
        </div>  

    
  );
};
export default App;

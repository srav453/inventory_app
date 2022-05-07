import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Contact from './pages/Contact';
import Loginpage from './pages/Loginpage';
import Register from './pages/Register';

function App() {
  // const ctx = useContext(AuthContext);
  return (
    <div className='App'>
      

    <Routes>
   
   <Route path='/login' element={<Loginpage />} />
   <Route path='/' exact element={<Register />}/>
   <Route path='/inventory' element={<Inventory />}/>
   <Route path='/about' element={<About />}/>
   <Route path='/Contact' element={<Contact />}/>

        
          
          {/* {!ctx.isLoggedIn && <Route path='/' exact element={<Login />} />}
          {ctx.isLoggedIn  && <Route path='/' exact element={<Home />} />} */}
        </Routes>
        </div>  
    
  );
}
export default App;
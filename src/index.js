import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import { AuthContextProvider } from './project/store/auth-context';

// const root = ReactDOM.createRoot (document.getElementById('root'));
// root.render(
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <AuthContextProvider> */}
      <App />
    {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
// ReactDOM.render(

//   <BrowserRouter>
//   <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from './Home';

import Register from './UserComponents/UserRegister';
import UserLogin from './UserComponents/UserLogin';
import UserHome from './UserComponents/UserHomePage';
import FeedbackForm from './FeedbackForm';
import HomePage from './HomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          {/* <Route path="/about" element={<About></About>}></Route> */}
          <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/userhome" element={<UserHome></UserHome>}></Route>
          <Route path="/feedback" element={<FeedbackForm></FeedbackForm>}></Route>
          {/* <Route path="/demo" element={<Home></Home>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

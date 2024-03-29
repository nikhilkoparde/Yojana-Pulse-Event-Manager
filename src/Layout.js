
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout1.css'


function Layout() {
  var [isLogin, setIsLogin] = useState(0);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  function checkLogin() {
    if (localStorage.getItem("login") == null) {
      setIsLogin(0);
    }
    else {
      setIsLogin(1);
    }
  }
  useEffect(checkLogin, []);
  function logout() {
    localStorage.removeItem("login");
    localStorage.removeItem("Username")
    window.location.replace("userlogin")
  }
  return (
    <div className="layout">
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>



        <div>
          <div className="homepage">


            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div class="container">
                <a class="navbar-brand" href="#"><span class="text-warning">Yojana</span>Pulse</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >Services</Link>
                    </li><pre>  </pre>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >Portfolio</Link>
                    </li><pre>   </pre>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >Team</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/" >Contact</Link>
                    </li>
                    {isLogin == 0 &&
                      <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/userLogin" >Login</Link>
                      </li>
                    }{
                      isLogin == 1 &&
                      <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to="/userhome" >DashBoard</Link>
                      </li>
                    }

                    <li class="nav-item">
                <Link>     <button className='modebtn' type="button"  onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                </Link> </li>

                  </ul>
                </div>
              </div>
            </nav>
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">

                {
                  <a class="navbar-brand" href="/">Event_Manager</a>
                }

                {/* {isLogin==1 &&
              <a class="navbar-brand" href="/userhome">Event_Manager</a>
            } */}

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {isLogin == 0 &&
                      <li class="nav-item">
                        {/* <Link to="/" className="button">Home</Link> */}
                        <Link class="nav-link active" aria-current="page" to="/" >Home</Link>
                      </li>
                    }

                    {
                      isLogin == 0 &&
                      <li class="nav-item" >
                        <a class="nav-link active" aria-current="page" href="/userLogin">UserLogin</a>
                      </li>
                    }

                    {
                      isLogin == 0 &&
                      <li class="nav-item" style={{ marginRight: "20px" }}>
                        <a class="nav-link active" aria-current="page" href="/register">UserRegister</a>
                      </li>
                    }
                    {
                      isLogin == 1 &&
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/userhome">UserHome</a>
                      </li>
                    }
                    {
                      isLogin == 1 &&
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/feedback">FeedBack</a>
                      </li>
                    }



                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/about">AboutUs</a>
                    </li>


                    <button className='modebtn' type="button" style={{ marginLeft: '800px' }} onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                    {
                      isLogin == 1 &&
                      <li class="nav-item">
                        <button onClick={logout} className='modebtn' type="button"  >LogOut</button>
                      </li>
                    }
                  </ul>
                </div>
              </div>
            </nav>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
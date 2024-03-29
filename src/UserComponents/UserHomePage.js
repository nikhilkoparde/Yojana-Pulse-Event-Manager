import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import QrCode from '../QrCodeGenerate'
import './UserHomePage.css'

import { CenterFocusStrong, Feedback } from '@mui/icons-material';
import { ChromePicker } from 'react-color';

export default function Home() {
  var [post, setPost] = useState([]);
  var [uan, setuan] = useState([]);
  var name = localStorage.getItem("Username");
  var login = localStorage.getItem("login");
  const [showComponent, setShowComponent] = useState(false);

  var [myname, setname] = useState();
  var [password, setpassword] = useState();
  var [email, setemail] = useState();
  var [mobile, setmobile] = useState();
  var [organization, setorganizatioe] = useState();
  var [designation, setdesignation] = useState();

  const [progress, setProgress] = useState(50);

  const handleButtonClick = () => {


    setShowComponent(!showComponent);
    post.map(temp => {

      if (temp.name == name) {
        setuan(temp.uniqueNo);
        // setname(temp.name);
        // setdesignation(temp.designation);
        // setmobile(temp.mobile);
        // setpassword(temp.password);
        // setorganizatioe(temp.organization);
        // setemail(temp.email);


      }
    })

  };

  const [color, setColor] = useState(''); // Initial color

  const handleChange = (newColor) => {
    setColor(newColor.hex); // Update color state when color changes
  };


  const [details, setdeatails] = useState(false);
  const handleColorChange = (event) => {
    setColor(event.target.value);
    updateThemeColor(event.target.value);
  };

  // Function to update the theme color
  const updateThemeColor = (newColor) => {
    document.documentElement.style.setProperty('--theme-color', newColor);
  };
  const handleviewdetails = () => {


    setdeatails(!details);
    post.map(temp => {

      if (temp.name == name) {
        setuan(temp.uniqueNo);
        setname(temp.name);
        setdesignation(temp.designation);
        setmobile(temp.mobile);
        setpassword(temp.password);
        setorganizatioe(temp.organization);
        setemail(temp.email);


      }
    })


  };
  const [registrationStatus, setRegistrationStatus] = useState('Succesful');
  const [participationSummary, setParticipationSummary] = useState({
    eventsAttended: 5,
    workshopsAttended: 3,
    webinarsAttended: 2
  });
  function checklogin() {
    if (login != 1) {

      window.location.replace("userlogin")
    }
  }
  useEffect(checklogin, []);

  function loadDataFromserver() {
    axios.get("http://localhost:4000/user").then((response) => {
      console.log("responese array=" + response.data)
      setPost(response.data)
    })
  }
  useEffect(loadDataFromserver, []);


  function logout() {
    localStorage.removeItem("login");
    localStorage.removeItem("Username")
    window.location.replace("userlogin")
  }
  function Feedback() {

    window.location.replace("feedback");
  }


  return (
    <div style={{ backgroundColor: color }}>
      <div className="dashboard">
        <div className="sidebar" style={{ backgroundColor: color }}>
          {/* Sidebar content */}
          <ul>

            <br></br>
            <h2 className='h2dash'>
              <li style={{ color: "black" }}><a href="#"><i class="bi bi-house"></i>Dashboard</a></li></h2>
            <hr></hr>
            <li><a href="#">   <button onClick={handleviewdetails} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

              <i class="bi bi-person-circle"></i>   My Profile</button></a></li>
            <li>
              <button className={"btn"} onClick={handleButtonClick} >   <i class="bi bi-qr-code-scan"></i>   My Code</button>
            </li>

            <li><a href="#"> <i class="bi bi-calendar-date"></i> Calender</a></li>

            <li><a href="#"> <i class="bi bi-bag-fill"></i>My Wishlist</a></li>

            <li><button className="btn" onClick={() => Feedback()}> <i class="bi bi-border-all"></i> Feedback</button></li>

            <li><a href="#"> <i class="bi bi-eye-slash-fill"></i> Change Password</a></li>


            <li><button className="btn" onClick={() => logout()}><i class="bi bi-box-arrow-left"></i> Logout</button></li>

            <li> <i class="bi bi-palette-fill"></i> Choose Theme  <br></br> <input type="color" color={color} onChange={handleColorChange} className="color-picker" /> </li>

            {/* <li><div className="color-picker">
      <h2></h2>
      <ChromePicker color={color} onChange={handleChange} />
      </div></li> */}
          </ul>
        </div>
        <div className="main-content">
          {/* Main content */}
          <br></br>
          <h2 className='mainname'> Welcome To Your DashBoard : {name}</h2><br></br>

          <div className="widgets">
            <div className="widget">
              <h3>Registration</h3>

              <h6> Status: {registrationStatus} <img src="./assets/checked.png" alt="Overview" style={{ height: "20", width: "20px" }} /></h6>

            </div>
            <div className="widget">
              <h3>My URN No</h3>
              {showComponent && <QrCode unumber={uan}> </QrCode>}

            </div>


          </div>
          <br></br>

          <div className="widgets">
            <div className="widget">
              <h3>UpComing Events </h3>
            <h6>  <button type="button" class="btn btn-warning btn-sm" style={{ padding: "10px" }}>View</button></h6>
            <div></div>

            </div>
            <div className="widget">
              <h3>Accomplishments </h3>
            <h6>  <button type="button" class="btn btn-warning btn-sm" style={{ padding: "10px" }}>View</button></h6>
           

            </div>


          </div>
          <br></br>
          <div className="widgets">
            <div className="widget">
              <h3> <i class="bi bi-megaphone-fill"></i> Announcement </h3>
              <h6> <button type="button" class="btn btn-warning btn-sm" style={{ padding: "10px" }}>Check Out</button></h6>


            </div>
            <div className="widget">
              <h3> <i class="bi bi-question-square"></i> Need Assistant?</h3>
              <div className="button-container">
             <h6>   <button type="button" class="btn btn-warning btn-sm  centered-button" style={{ padding: "10px" }}>We're Here To Help</button></h6>

              </div>
            </div>


          </div>

          <br></br>




        </div>
      </div>
      <br></br>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 names'>
            {/* <h3> Welcome To User DashBoard : {name}</h3> */}
            {/* <h4>Registration Status: {registrationStatus} <img src="./assets/checked.png" alt="Overview" style={{ height: "30", width: "30px" }} /></h4>
            */}
            <div>


              {/* <button onClick={handleviewdetails} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                My Info
              </button>
              <br></br> */}


              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">My Information</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <pre>
                        <h6>Name              :{myname} </h6>
                        <h6>Email              :{email} </h6>
                        <h6>Phone             :{mobile} </h6>
                        <h6>Organization :{organization} </h6>
                        <h6>Designation   :{designation} </h6>
                        <h6>Password      :{password} </h6>
                        <h6>UAN               :{uan} </h6>
                      </pre>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
              </div>


            </div>
            <br></br>

          </div><div className='col-md-6'>




          </div>
        </div>
      </div>



      {/* <div className="heading" style={{ height: "400px" }}>
        <div className="header ">
          <h2>Participation Summary</h2>
          <br></br>

        </div> */}
      {/* <div className="main-box">
          <div className="mymodal">
            <img src="./assets/event.jpg" alt="Overview" style={{ height: "200px", width: "250px" }} />
            <div className="card-content">
              <h5>Events Attended :{participationSummary.eventsAttended}</h5>

              <div className='divbtntoview'>


                <button type="button" style={{ width: "150px" }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  View
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mymodal">
            <img src="./assets/Workshop.jpg" alt="Analytics" style={{ height: "200px", width: "250px" }} />
            <div className="card-content">
              <h5>Workshops Attended :{participationSummary.workshopsAttended}</h5>

              <div className='divbtntoview'>
                <button type="button" style={{ width: "150px" }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  View
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="mymodal">
            <img src="./assets/webinar.jpg" alt="Reports" style={{ height: "200px", width: "250px" }} />
            <div className="card-content">
              <h5>Webinars Attended :{participationSummary.webinarsAttended}</h5>

              <div className='divbtntoview'>
                <button type="button" style={{ width: "150px" }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  View
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mymodal">
            <img src="./assets/wishlistimg.jpg" alt="Settings" style={{ height: "200px", width: "250px" }} />
            <div className="card-content">
              <h5>WishList Items : 6</h5>


              <div className='divbtntoview'>
                <button type="button" style={{ width: "150px" }} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  View
                </button>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      {/* </div> */}
      <br></br>





    </div>
  )
}

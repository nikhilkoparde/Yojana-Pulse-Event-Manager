import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Mail } from '@mui/icons-material';
// import './FeedbackForm.css'


export default function FeedbackForm() {
    const [progress, setProgress] = useState(50);

    var [post, setPost] = useState([]);
    var [uan, setuan] = useState([]);
    var [registration, setregistration] = useState();
    var [payment, setpayment] = useState();
    var [hospitality, sethospitality] = useState();
    var [technical, settechnical] = useState();
    var [venue, setvenue] = useState();
    var [food, setfood] = useState();
    var [overall, setoverall] = useState();
    var name = localStorage.getItem("Username");



    var [myname, setname] = useState();
  var [password, setpassword] = useState();
  var [email, setemail] = useState();
  var [mobile, setmobile] = useState();
  var [organization, setorganizatioe] = useState();
  var [designation, setdesignation] = useState();
  var login = localStorage.getItem("login");
    
  const [details, setdeatails] = useState(false);
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
        alert(email);


      }
    })


  };
  
  function checklogin() {
    if (login != 1) {

      window.location.replace("userlogin")
    }
  }
  useEffect(checklogin, []);



    function loadDataFromserver() {
        axios.get("http://localhost:4000/survey").then((response) => {

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


    function addfeedback(event) {
        event.preventDefault();

        const newfeedback = {
            registration: registration,
            payment: payment,
            hospitality: hospitality,
            technical: technical,
            venue: venue,
            food: food,
            overall: overall,
            name: name

        }
        axios.post("http://localhost:4000/survey", newfeedback).then((res) => {
            loadDataFromserver();
            setregistration("")
            setpayment("");
            sethospitality("");
            setvenue("");
            setoverall("");


        })

        alert("Feedback Submitted");
        window.location.replace("userhome");

    }



    return (
        <div>
            <div className="dashboard">
                <div className="sidebar">
                    {/* Sidebar content */}
                    <ul>

                        <br></br>
                        <h2 className='h2dash'>
                            <li style={{ color: "black" }}><a href="/userhome"><i class="bi bi-house"></i>Dashboard</a></li></h2>
                        <hr></hr>
                      
                        <li><a href="#">   <i class="bi bi-person-circle"></i>     My Profile</a></li>


  

                        <li><a href="#"> <i class="bi bi-calendar-date"></i> Calender</a></li>

                        <li><a href="#"> <i class="bi bi-bag-fill"></i>My Wishlist</a></li>

                        <li><button className="btn" onClick={() => Feedback()}> <i class="bi bi-border-all" ></i> Feedback</button></li>

                        <li><a href="#"> <i class="bi bi-eye-slash-fill"></i> Change Password</a></li>


                        <li><button className="btn" onClick={() => logout()} ><i class="bi bi-box-arrow-left"></i> Logout</button></li>

                    </ul>
                </div>
                <div className="main-content">
                    <div className='form-box'>
                        <br></br>
                        <div class="wrapper" style={{}}>
                            <div className='img-area'>
                                <img className='feedbackphoto'
                                    src="./assets/feedbackimg.jpg" style={{width:"700px",height:"500px"}}

                                />
                            </div>
                            <div className='form-area'  >
                                <h2 className='loginname' >Feedback Form</h2>
                                <form onSubmit={addfeedback} class="form" >


                                    <div className='feedbackform' >
                                        <div className='single-form'>
                                            <label htmlFor="registration">Registration Process</label><br></br>
                                            <select name="registration" style={{ width: '300px' }} value={registration} onChange={e => setregistration(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label htmlFor="payment">Payment experience</label><br></br>
                                            <select name="payment" value={payment} style={{ width: '300px' }} onChange={e => setpayment(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label htmlFor="hospitality">Hospitality</label><br></br>
                                            <select name="hospitality" value={hospitality} style={{ width: '300px' }} onChange={e => sethospitality(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label htmlFor="technical">Technical Content</label><br></br>
                                            <select name="technical" value={technical} style={{ width: '300px' }} onChange={e => settechnical(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label htmlFor="venue">Venue Navigation</label><br></br>
                                            <select name="venue" value={venue} style={{ width: '300px' }} onChange={e => setvenue(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label htmlFor="food">Food Quality</label><br></br>
                                            <select name="food" value={food} style={{ width: '300px' }} onChange={e => setfood(e.target.value)} required>
                                                <option value="">Select an option</option>
                                                <option value="Strongly Agree">Strongly Agree</option>
                                                <option value="Agree">Agree</option>
                                                <option value="Neutral">Neutral</option>
                                                <option value="Disagree">Disagree</option>
                                                <option value="Strongly Disagree">Strongly Disagree</option>
                                            </select>
                                        </div>
                                        <div className='single-form'>
                                            <label for="overall" className='labelfield'>Overall Experience</label><br></br>

                                            <textarea style={{ width: '300px', height: '30px' }} id="overall" name="overall" rows="4" value={overall} onChange={e => setoverall(e.target.value)} required cols="50">

                                            </textarea><br></br>
                                        </div>
                                        <input type='submit' value="Submit" />
                                    </div>
                                </form>


                            </div>
                            <br></br>


                        </div>
                    </div>
                </div>
                </div>
                
                </div>

                );
}



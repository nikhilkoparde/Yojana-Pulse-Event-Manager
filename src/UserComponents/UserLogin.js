import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import '../Login.css'

export default function Register() {
    var [post, setPost] = useState([]);
    var [name, setname] = useState();
    var [password, setpassword] = useState();
   var [error, setError] =useState();

    function loadDataFromserver() {
        axios.get("http://localhost:4000/user").then((response) => {
            console.log("responese array=" + response.data)
            setPost(response.data)
        })
    }
    useEffect(loadDataFromserver, []);

    function validateuser() {
        var valid = false;
        post.map(temp => {
            var tempname = temp.name
            var temppassword = temp.password
            if (tempname == name && temppassword == password) {
                valid = true;
            }
        })
        return valid;
    }

    function userlogin(event) {
        event.preventDefault();
        var booleanvalue = validateuser();
        if (booleanvalue) {
            localStorage.setItem("login", 1);
            localStorage.setItem("Username", name)
            window.location.replace("userhome")
        }
        else {
            setError("Username or Password incorrect!")
        }
    }


    function Register() {
        window.location.replace("register");
    }

    return (
        <>
        <div className='form-box'>
       
            <br></br>
            <br></br>
            <div class="wrapperx" style={{}}>
                <div className='img-area'>
                    <img src="./assets/checked.png" alt="dd" />
                </div>
                <div class="form-area">
                    <h2 className='loginname'>LogIn</h2>
                    <form  onSubmit={userlogin}>
                   <p style={{color:"red"}}> {error}</p>
                        <div class="single-form">
                            <input type="text" placeholder='UserName' required value={name} onChange={e => setname(e.target.value)}></input>
                        </div>
                        <div class="single-form">
                            <input type="password" placeholder='Password' required value={password} onChange={e => setpassword(e.target.value)}></input>
                        </div>
                        <input type="submit" value="Login" />
                        <br></br><br></br>
                        <h5>Not a member? <a href="#" onClick={Register}> Signup </a>now</h5>
                        <p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
                               
                    </form>
                </div>
            </div>
        </div>

                {/* 
                <form onSubmit={userlogin} class="form">
                    <input type="text" placeholder='UserName' required value={name} onChange={e => setname(e.target.value)}></input>
                    <br></br>
                    <input type="password" placeholder='Password' required value={password} onChange={e => setpassword(e.target.value)}></input>
                    <br></br>
                    <div className='loginbtn'>
                        <button type='submit' class="btn btn-primary"  >Login</button>
                    </div>
                    <br>
                    </br>
                    <p>Not a member? <a href="#" onClick={Register}> Signup </a>now</p>
                </form>
                <br></br> */}

          

</>


            )
}

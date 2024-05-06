import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useEffect } from "react";
import "../Register.css";
// import './UserRegister.css'

export default function Register() {
  var [post, setPost] = useState([]);
  var [name, setname] = useState();
  var [password, setpassword] = useState();
  var [email, setemail] = useState();
  var [mobile, setmobile] = useState();
  var [organization, setorganizatioe] = useState();
  var [designation, setdesignation] = useState();

  //for
  var [ename, esetname] = useState();
  var [epassword, esetpassword] = useState();
  var [eemail, esetemail] = useState();
  var [emobile, esetmobile] = useState();

  //succes
  var [succes, setsucces] = useState();

  // var[urn, seturn]=useState();

  function loadDataFromserver() {
    axios.get("http://localhost:4000/user").then((response) => {
      console.log("responese array=" + response.data);
      setPost(response.data);
    });
  }

  useEffect(loadDataFromserver, []);

  function validateForm() {
    var formValid = true;
    const cond1 = ".*[a-z].*";
    const cond2 = ".*[A-Z].*";
    const cond3 = ".*[$ @ & !].*";
    const cod4 = "^[0-9]{10}$";
    const usernameregx = "[a-zA-Z]{4,}";
    const regemail = /@/;

    if (!password.match(cond1)) {
      esetpassword("Password must contain one atleast small letter");
      formValid = false;
    } else if (!password.match(cond2)) {
      esetpassword("Password must contain one atleast Capital letter");
      formValid = false;
    } else if (!password.match(cond3)) {
      esetpassword(" password must containat least one Special Charecters");
      formValid = false;
    } else if (!email.match(regemail)) {
      esetemail("email incorrect");
      formValid = false;
    } else if (!name.match(usernameregx)) {
      esetname("Username must contain atleast 4 charecters");
      formValid = false;
    } else if (!mobile.match(cod4)) {
      esetmobile("Mobile number must contains 10 digits");
      formValid = false;
    } else {
      setsucces("Succesfly Register!");
      window.location.replace("userlogin");
    }
    return formValid;
  }

  const generateUniqueCode = () => {
    // to fetch  current timestamp
    const timestamp = new Date().getTime();

    // Generate 6 characters)
    const randomPortion = Math.random().toString(36).substring(2, 8);

    // Combine timestamp and random portion
    const uniqueCode = timestamp.toString().slice(-2) + randomPortion;

    return uniqueCode;
  };

  function adduser(event) {
    event.preventDefault();
    if (validateForm()) {
      // const unique = uuidv4();
      const unique = generateUniqueCode();

      const newuser = {
        name: name,
        password: password,
        email: email,
        mobile: mobile,
        organization: organization,
        designation: designation,
        uniqueNo: unique,
      };

      axios.post("http://localhost:4000/user", newuser).then((res) => {
        loadDataFromserver();
        setname("");
        setpassword("");
        setemail("");
        setmobile("");
      });
    }
  }
  function signin() {
    window.location.replace("userlogin");
  }

  return (
    <div className="form-box">
      <br></br>
      <br></br>
      <div class="wrapper" style={{}}>
        <div className="img-area">
          <img src="./assets/checked.png" alt="dd" />
        </div>
        <div class="form-area">
          <h2 className="loginname">SignUp</h2>
          {} <p style={{ color: "green" }}> {succes}</p>
          <form onSubmit={adduser}>
            <div class="single-form">
              <input
                type="text"
                placeholder="UserName"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              ></input>
              {} <p style={{ color: "red" }}> {ename}</p>
            </div>

            <div class="single-form">
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>
              {} <p style={{ color: "red" }}> {eemail}</p>
            </div>
            <div class="single-form">
              <input
                type="text"
                placeholder="organization"
                required
                value={organization}
                onChange={(e) => setorganizatioe(e.target.value)}
              ></input>
            </div>
            <div class="single-form">
              <input
                type="text"
                placeholder="designation"
                required
                value={designation}
                onChange={(e) => setdesignation(e.target.value)}
              ></input>
            </div>
            <div class="single-form">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              ></input>
              {} <p style={{ color: "red" }}> {epassword}</p>
            </div>
            <div class="single-form">
              <input
                type="text"
                placeholder="Mobile Number"
                required
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              ></input>
              {} <p style={{ color: "red" }}> {emobile}</p>
            </div>
            <input type="submit" value="Signup" />
            <br></br>
            <br></br>

            {/* <button type='submit' class="btn btn-primary">Signup</button>
            <br></br> */}

            <h5>
              Already Register?{" "}
              <a href="#" onClick={signin}>
                {" "}
                Signin{" "}
              </a>
              now
            </h5>
            <p class="socials">
              <i class="bi bi-twitter text-dark mx-1"></i>{" "}
              <i class="bi bi-facebook text-dark mx-1"></i>{" "}
              <i class="bi bi-linkedin text-dark mx-1"></i>{" "}
              <i class="bi bi-instagram text-dark mx-1"></i>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

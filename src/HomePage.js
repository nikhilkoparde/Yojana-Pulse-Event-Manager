
import React, { useEffect, useState } from 'react';
import './HomePage.css'

export default function HomePage() {
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

        <>
        <div className={`App ${darkMode ? 'dark' : 'light'}`}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#"><span class="text-warning">Yojana</span>Pulse</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li><pre>  </pre>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Portfolio</a>
                            </li><pre>   </pre>
                            <li class="nav-item">
                                <a class="nav-link" href="#team">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            {isLogin == 0 &&
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/userLogin" >Login</a>
                      </li>
                    }{
                      isLogin == 1 &&
                      <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/userhome"  >Dashboard</a>
                      
                      </li>
                    }
                             <li class="nav-item">
                             <button className='modebtn' type="button" style={{width:"130px",marginLeft:"10px"}} onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                    </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* //crousel */}

            <div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
                <div class="carousel-indicators">
                    <button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img alt="..." class="d-block w-100" src="./assets/Event.png" />
                        <div class="carousel-caption">
                            <h5>Yojana Pulse</h5>
                            <p>One way towards social to light up your life.</p>
                            <p><a class="btn btn-warning mt-3" href="#">Know More</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img alt="..." class="d-block w-100" src="./assets/Event.png" />
                        <div class="carousel-caption">
                            <h5>Yojana Pulse</h5>
                            <p>One way towards social to light up your life.</p>
                            <p><a class="btn btn-warning mt-3" href="#">Know More</a></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./assets/Event.png" />
                        <div class="carousel-caption">
                            <h5>Yojana Pulse</h5>
                            <p>One way towards social to light up your life.</p>
                            <p><a class="btn btn-warning mt-3" href="#">Know  More</a></p>
                        </div>
                    </div>
                </div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>
            </div>
            {/* about section */}
            <section class="about section-padding" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-12">
                            <div class="about-img"><img alt="" class="img-fluid" src="./assets/checked.png" /></div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                            <div class="about-text">
                                <h2>We Provide the Best Quality<br />
                                    Services Ever</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, labore reiciendis. Assumenda eos quod animi! Soluta nesciunt inventore dolores excepturi provident, culpa beatae tempora, explicabo corporis quibusdam corrupti. Autem, quaerat. Assumenda quo aliquam vel, nostrum explicabo ipsum dolor, ipsa perferendis porro doloribus obcaecati placeat natus iste odio est non earum?</p><a class="btn btn-warning" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services */}
            <section class="services section-padding" id="services">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur<br />
                                    adipisicing elit. Non, quo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <i class="bi bi-laptop"></i>
                                    <h3 class="card-title">Best Quality</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <i class="bi bi-journal"></i>
                                    <h3 class="card-title">Sustainability</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-white text-center bg-dark pb-2">
                                <div class="card-body">
                                    <i class="bi bi-intersect"></i>
                                    <h3 class="card-title">Integrity</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio */}
            <section class="portfolio section-padding" id="portfolio">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Projects</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur<br />
                                    adipisicing elit. Non, quo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-light text-center bg-white  pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4"><img alt="" class="img-fluid" src="./assets/Event.png" /></div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-light text-center bg-white pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4"><img alt="" class="img-fluid" src="./assets/Event.png" /></div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-light text-center bg-white pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4"><img alt="" class="img-fluid" src="./assets/Event.png" /></div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p><button class="btn bg-warning text-dark">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* team section */}
            <section class="team section-padding" id="team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Team</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur<br />
                                    adipisicing elit. Non, quo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img alt="" class="img-fluid rounded-circle" src="./assets/team.jpg" />
                                    <h3 class="card-title py-2">Jack Wilson</h3>
                                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.</p>
                                    <p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img alt="" class="img-fluid rounded-circle" src="./assets/team.jpg" />
                                    <h3 class="card-title py-2">Jack Wilson</h3>
                                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.</p>
                                    <p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img alt="" class="img-fluid rounded-circle" src="./assets/team.jpg" />
                                    <h3 class="card-title py-2">Jack Wilson</h3>
                                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.</p>
                                    <p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img alt="" class="img-fluid rounded-circle" src="./assets/team.jpg" />
                                    <h3 class="card-title py-2">Jack Wilson</h3>
                                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam nostrum illo tempora esse quibusdam.</p>
                                    <p class="socials"><i class="bi bi-twitter text-dark mx-1"></i> <i class="bi bi-facebook text-dark mx-1"></i> <i class="bi bi-linkedin text-dark mx-1"></i> <i class="bi bi-instagram text-dark mx-1"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact */}
            <section class="contact section-padding" id="contact">
                <div class="container mt-5 mb-5">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Contact Us</h2>
                                <p>House no. 09 Sai Nagar colony Belagavi, India</p>
                                <p>yojanapulse@gmail.com</p>
                                <p>
                                
                                    +91 88888 88888</p>
                            </div>
                        </div>
                    </div>
                    <div class="row m-0">
                        <div class="col-md-12 p-0 pt-4 pb-4">

                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-dark p-2 text-center">
                <div class="container">
                    <p class="text-white"> Copyright © 2024 Yojana Pulse | Powered by Yojana Pulse</p>
                   

                </div>
            </footer>

</div>
        </>
    )
}

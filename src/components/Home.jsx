import React from "react";
import { Link } from "react-router-dom";

import student1 from './Assets/student1.jpg';
import student2 from './Assets/student2.jpg';
import student3 from './Assets/student3.jpg';

// import sliderimg1 from './Assets/slider1.jpg';
// import sliderimg2 from './Assets/slider2.jpg';
// import sliderimg3 from './Assets/slider3.jpg';
// import sliderimg4 from './Assets/slider4.jpg';
// import sliderimg5 from './Assets/slider5.jpg';


import hero_img from './Assets/hero.jpg';
import skill from './Assets/img6.jpg';
import team from './Assets/team.png';

function Home() {
  return (
    <div className="home">
    <div className="hero site-section">
            <div className="container">
            
                <div className="row">
                    <div className="col-md-4 hero-text">
                        <div>
                        <h5>Hi,</h5>
                        <h1>Young Mind</h1>
                        <p className="short-description">Want to Learn Something New</p>
                        <a href="#s2" className="btn btn-success">Expore More<i class="bi bi-arrow-down-short"></i></a><br /><br />
                        </div>
                    </div>
                    <div className="col-md-8">
                      <img class="hero-background img-fluid login-img" src={hero_img} alt="hero-background-pic" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container"><br /><br />
          <div class="section-title s1"><h1>India's Best Learning App</h1></div>
        </div>

        <section id="s2" class="site-section3">
            {/* <div class="container"><br /><br />
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={sliderimg1} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sliderimg2} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sliderimg3} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sliderimg4} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src={sliderimg5} class="d-block w-100 img-fluid" alt="..."/>
                    </div>
                  </div>
                  <button class="carousel-control-prev img-fluid" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next img-fluid" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </div> */}
        </section>


       
        <section id="s3" class="site-section3">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 ">
                        <img class="skill img-fluid" src={skill} alt="Skill" />                
                    </div>
                    <div className="col-md-7 section3-text">
                      <div><h2>Learn A New Skill Today </h2>
                      <p>Explore our Courses and Earn a bright future</p>
                      <Link className="course-redirect" to="/courses"><a className="btn btn-success btn-sm" >Explore<i class="bi bi-arrow-right-short"></i></a></Link>
                    </div></div>
                </div>
            </div>
        </section>

        <section id="s4" class="site-section3">
            <div class="container">
                <div class="row">                    
                    <div className="col-md-7 section3-text">
                      <div><h2>Meet Our Team</h2>
                      <p>We Help to Build a Bright Career</p>
                      <Link className="team-redirect" to="/about"><a className="btn btn-success btn-sm" >Explore<i class="bi bi-arrow-right-short"></i></a></Link>
                    </div></div>
                    <div class="col-md-5 ">
                        <img class="team img-fluid" src={team} alt="Our Instructors"/>                
                    </div>
                </div>
            </div>
        </section>


      {/******** * TESTIMONIALS  ***********/}
        <section id="s5" class="site-section3">
            <div class="container">
            <br/><br/><br/><br/><br/>
            <div className="title"><h2>Hear from our students...</h2></div><br />
        <div class="row g-md-2">
        <div class="col-md-4 col-sm-12"> 
            <div class="card" >
              <img src={student1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text"><h6>Anna Rose</h6> </p>
                <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reiciendis vero totam, 
                  quisquam rem, neque optio, perferendis ut dolore tempore id 
                  itaque quod pariatur maiores aperiam illum iste incidunt molestias."</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12"> 
            <div class="card" >
              <img src={student2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text"><h6>Timothy Mathew</h6></p>
                <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reiciendis vero totam, 
                  quisquam rem, neque optio, perferendis ut dolore tempore id 
                  itaque quod pariatur maiores aperiam illum iste incidunt molestias."</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="card" >
            <img src={student3} class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-text"><h6>Serah</h6>  </p>
              <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reiciendis vero totam, 
                  quisquam rem, neque optio, perferendis ut dolore tempore id 
                  itaque quod pariatur maiores aperiam illum iste incidunt molestias."</p>
            </div>
          </div>
        </div>
    
        </div>
            </div>
        </section>

    </div>
  );
}

export default Home;
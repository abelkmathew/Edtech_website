import React from "react";
import { Link } from "react-router-dom";

import student1 from './Assets/student1.jpg';
import student2 from './Assets/student2.jpg';
import student3 from './Assets/student3.jpg';

import hero_img from './Assets/hero.jpg';
import skill from './Assets/img6.jpg';
import team from './Assets/team.png';

import pattern1 from './Assets/img10.png';
import pattern2 from './Assets/img11.png';
import pattern3 from './Assets/img12.png';

function Home() {
  return (
    <div className="home">
      <div className="news-marquee">
      <marquee class="marquee-text" scrollamount="10"><a href="#courses">Courses available at discounted price....Hurry Up! <p>Grab your course now!!!</p></a></marquee><br />
      </div>   
      <div className="hero">
          <div className="container">                
              <div className="row">
                  <div className="col-md-4 hero-text">
                      <div>
                      <h5>Hi,</h5>
                      <h1>Young Mind</h1>
                      <p className="short-description">Want to Learn Something New</p>
                      <a href="#courses" className="btn btn-success">Expore More<i class="bi bi-arrow-down-short"></i></a><br /><br />
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
        <div className="container">          
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <img class="img=fluid pattern1" src={pattern1} alt="pattern-img" />
                <div class="card-body">
                  <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Quod tempore fuga inventore aliquam iusto. Odit, veniam accusantium? Reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </div>
            
            </div>
            <div className="col-md-4">
              <div class="card">
                  <img class="img=fluid pattern1" src={pattern2} alt="pattern-img" />
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Quod tempore fuga inventore aliquam iusto.veniam accusantium? Reiciendis.</p>
                  </div>
              </div>  
            </div>
            <div className="col-md-4">
              <div class="card">
                    <img class="img=fluid pattern1" src={pattern3} alt="pattern-img" /> 
                    <div class="card-body">
                      <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Quod tempore fuga inventore aliquam iusto. Odit, veniam accusantium? Reiciendis.</p>
                    </div>
              </div>  
            </div>
          </div>
        </div>
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
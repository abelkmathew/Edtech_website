import React from "react";
import student1 from './Assets/student1.jpg';
import student2 from './Assets/student2.jpg';
import student3 from './Assets/student3.jpg';

import sliderimg1 from './Assets/slider1.jpg';
import sliderimg2 from './Assets/slider2.jpg';
import sliderimg3 from './Assets/slider3.jpg';
import sliderimg4 from './Assets/slider4.jpg';
import sliderimg5 from './Assets/slider5.jpg';


import hero_img from './Assets/img.jpg';



function Home() {
  return (
    <div className="home">
    <div className="hero site-section">
            <div className="container">
            
                <div className="row">
                    <div className="col-md-6">
                        <p>Hi</p>
                        <h1>Young Mind</h1>
                        <p className="short-description">Want to Learn Something New</p>
                        <a href="#s2" className="btn btn-success">Expore More<i class="bi bi-arrow-down-short"></i></a>

                    </div>
                </div>
            </div>
        </div>
        <div class="container"><br /><br />
          <div class="section-title s1"><h1>India's Best Learning App</h1></div><br />
        </div>

        <section id="s2" class="site-section2">
            <div class="container"><br /><br />
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
            </div>
        </section>


       
        <section id="s3" class="site-section">
            <div class="container">
                <div class="row">
                    <div class=" ">
                        <div class="section-title"><h2>MY SKILLS</h2></div>
                        <p>I'm and aspiring Frontend developer.I'm currently seeking
                            freelance works.Asuuring your good quality website for your business.
                        </p>
                    </div>
                </div>
            </div>
        </section>


 
        <section id="s4" class="site-section">
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
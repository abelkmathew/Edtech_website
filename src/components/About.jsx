import React from "react";
import team_m1 from './Assets/team1.jpg';
import team_m2 from './Assets/team2.jpg';
import team_m3 from './Assets/team3.jpg';
import team_m4 from './Assets/team4.jpg';
import team_m5 from './Assets/team5.jpg';
import team_m6 from './Assets/team6.jpg';
import image from './Assets/about.png'



function About() {
  return (
    <div className="about site-section">
      <div id="about" >
        <div className="container">
          <div className="section-title"><h1>ABOUT US</h1></div><br />
            <div className="row">
                <div className="col-md-6">
                    <div><h2>hhhhhhOur Vision</h2></div><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt harum. 
                      Aliquam quaerat consectetur, dicta voluptates minus iure suscipit sit, 
                      tempore amet quae sunt maiores? Dicta repudiandae ipsa animi ratione! Lorem ipsum dolor sit amet 
                      consectetur adipisicing elit. Expedita sint velit sapiente iure magni esse deleniti autem saepe aliquam 
                      accusamus,vel blanditiis neque assumenda, excepturi ducimus itaque officiis quibusdam minima?
                    </p>
                    <a href="#instructors" className="btn btn-success">Our Instructors<i className="bi-arrow-down-short"></i></a>
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={image} alt="Vision"></img>
                </div>
            </div><br /><br /><br />
            <div className="col-md-12"></div>
            <div className="section-title" id="instructors"><h2>Meet our Instructors</h2></div><br /><br />
            <div className="meet row">
              <div className="col-md-4 col-sm-12">
                <div className="card" >
                    <img src={team_m1} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>Irene Sam</h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="card" >
                    <img src={team_m2} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>George Varghese</h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>   
              <div className="col-md-4">
                <div className="card" >
                    <img src={team_m3} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>Hendry John</h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>   
              <div className="col-md-4">
                <div className="card" >
                    <img src={team_m4} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>Sam Joseph </h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>   
              <div className="col-md-4">
                <div className="card" >
                    <img src={team_m5} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>Sona Mary</h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>   
              <div className="col-md-4">
                <div className="card" >
                    <img src={team_m6} className="card-img-top" alt="Team-Member"/>
                    <div className="card-body">
                      <p className="card-text"><h6>Ann Thomas</h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                      Provident, magni. Laboriosam tempore cumque repellat deserunt illo error 
                      pariatur veritatis perferendis! Adipisci magnam assumenda, ullam est eligendi corporis consectetur tempore vel!</p>
                    </div>
                </div>  
              </div>       
                  
          
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
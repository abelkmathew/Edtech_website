import React from 'react'
import c1 from './Assets/web.png'
import c2 from './Assets/android.jpg'
import c3 from './Assets/python.jpg'
import c4 from './Assets/digitalmarketing.jpg'
import c5 from './Assets/ML.jpg'
import c6 from './Assets/bigdata.jpg'


function Courses() {
    return (
        <div className="site-section">
            <div className="container">
            <div className="section-title"><h1>Our Courses</h1></div><br />
            <div className="courses row">
                <div className="col-md-4">
                    <div class="card" >
                        <img src={c1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Web Development</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" >
                        <img src={c2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Android App Development</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet.
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" >
                        <img src={c3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Python Programming</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" >
                        <img src={c4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Digital Marketing</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div class="card" >
                        <img src={c5} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Machine Learning</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <img src={c6} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Big Data</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet.
                            </p>
                            <div className="coursebtn"><a href="#" class="btn btn-success">Learn More</a></div>
                        </div>
                    </div>
                </div>







                </div>
            </div>
        </div>
    )
}

export default Courses

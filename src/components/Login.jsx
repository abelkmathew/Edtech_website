import React from 'react'
import login from './Assets/login.jpg';

function Login() {
    return (
    <div className="site-section">
        <div className="container">
        <div className="login-img"><img class="login-page-image img-fluid " src={login} alt="img" /></div><br /><br />
        <div className="row">
           <div className="col-md-4">
               <h2>Providence Acdemy</h2>
               <p>Grow your skills with us</p>
               <ul type="square">
                   <li>Live Classes with best instructors</li>
                   <li>Recorded Lectures for future refernce</li>
                   <li>Test Series for practise</li>
               </ul>
           </div>
           <div className="col-md-6">    
              <form>
              <div className="form-floating mb-3">
                  
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label form="floatingPassword">Password</label>
                    </div>
              </form>
              <div className="row space-login">
                  <div className="col-md-9">
                  <p>Forgot Password?<br />
                         Don't have an account yet? <a href="">Register now </a></p>
                  </div>
                  <div className="col-md-3">
                        <button className="btn btn-success">Login</button>
                  </div>
              </div>
              
           </div>   
           <div className="col-md-6"></div>

       </div>
       
       </div>

   


    </div>
       
    
    )
}

export default Login

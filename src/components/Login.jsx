import React from 'react'
import login from './Assets/bg.png';

function Login() {
    return (
    <div className="site-section">
        <div className="container">
        <div className="row">
           <div className="col-md-3">
               <h2 className="header-logo logo-black">Providence Academy</h2>
               <p>Grow your skills with us</p>
               <ul type="square">
                   <li>Live Classes with best instructors</li>
                   <li>Recorded Lectures for future refernce</li>
                   <li>Test Series for practise</li>
               </ul>
           </div>
           <div className="col-md-5">    
              <form> <h4>Login to Continue</h4>
                <div className="form-floating mb-3">   
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                </div>
              </form>
              
              <div className="row space-login">
                  <div className="col-md-9">
                  <p><a href="#">Forgot Password?</a><br />
                         Don't have an account yet? <button class="btn btn-sm btn-outline-primary" type="submit" data-bs-toggle="modal" 
                         data-bs-target="#MsgAlert">Register now</button> </p>
                  </div>
                  <div className="col-md-3">
                        <button className="btn btn-danger">Login</button>
                  </div>
              </div>
              
           </div>   
           <div className="col-md-4">
           <div className="login-img"><img class="login-page-image img-fluid " src={login} alt="login-page-img" /></div><br /><br />
           </div>

       </div>
       </div>



       <div class="modal register " id="MsgAlert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" >
            <div class="modal-content">
              <div class="modal-body">
                <div className="close-window"><button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button><br/></div>
                <div class="register-title"><h3>Register and Start Learning !</h3></div><br />
                <div class="row">
                <div class="col-md-6">
                  <label>First Name:</label>
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div class="col-md-6">
                <label>Last Name:</label>
                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                </div> <br/>
              </div>
              <div class="col-md-12">
                <br/>
                <label>Phone:</label>
                <input type="number" class="form-control" id="inputEmail4" placeholder="Mobile Number"/><br/>
              </div>
              <div class="col-md-12">
              <label>Email Id:</label>
                <input type="email" class="form-control" id="inputEmail3" placeholder="name@example.com"/><br/>
              </div>
              <div className="col-md-12">
              <label for="floatingPassword">Password:</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              </div>    
              </div>
              
              <div class="modal-footer">
              <p>By registering, you agree to our <button class="terms-conditions" type="submit" data-bs-toggle="modal"  data-bs-target="#MsgAlert2">Terms and Conditions.</button></p>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Register</button>
              </div>
            </div>
          </div>
      </div>

      
      <div class="modal register " id="MsgAlert2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div className="modal-header">
          <h3>Terms and Conditions</h3>
        </div>
        <div className="modal-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quis est vero ducimus modi molestias eveniet illo consectetur, quas placeat qui porro unde 
           magni voluptatibus fuga animi iste aliquam ea?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque, 
           repudiandae neque corporis facilis mollitia, error dicta inventore excepturi quae repellat nobis. 
           Quis nulla reiciendis facere minima assumenda, voluptas ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolore, 
           suscipit enim nobis consectetur libero vitae quaerat itaque reprehenderit ducimus odio? Qui ut enim aut 
           tempora accusantium excepturi rerum natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt excepturi accusamus quod harum provident, ea, 
           numquam minus aut quae tempora at voluptatum optio vel, explicabo voluptate itaque totam quidem quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Asperiores minus architecto a modi, nisi molestias maiores non quas officiis cum consequatur natus atque veniam! Nemo fugit numquam aperiam provident saepe. 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati culpa eos deleniti! Porro maiores officiis corporis iure? Provident repellat laborum a 
           sapiente et sit fuga sed mollitia tempora inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab error consequuntur sit asperiores odit 
           optio minima quibusdam ipsam unde. Veniam id officia inventore possimus animi reiciendis debitis aliquid omnis. Lorem ipsum dolor sit amet consectetur adipisicing 
           elit. Repellendus dolorem sequi rerum, nulla et, quas cumque eum temporibus totam, laborum voluptas? Quisquam cumque numquam quidem amet aliquid impedit asperiores soluta!</p>   
        </div>
        <div className="modal-footer ">
          <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Ok</button>
        </div>


        </div>
      </div>
      </div>
   


    </div>
       
    
    )
}

export default Login

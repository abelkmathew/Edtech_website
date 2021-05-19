import React from "react";
import logo from './Assets/logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
          <div className="row">
              <div className="col-md-6 col-sm-12 footer-block1 ">
                  <div className="logo1"> <a href="/" className='header-logo'><img class="logo" src={logo}></img>Providence Academy</a></div><br/>
                  <p className="Sub-heading" >Follow Us On<br/>
                  <a href="facebook.com"><i className="bi bi-facebook"></i></a>
                  <a href="twitter.com"><i className="bi bi-twitter "></i></a>
                  <a href="youtube.com"><i className="bi bi-youtube"></i></a>
                  <a href="instagram.com"><i className="bi bi-instagram"></i></a>
                  <a href="linkedin.com"><i className="bi bi-linkedin"></i></a></p>
              </div>
              
              <div className="col-md-6 col-sm-12 footer-block2">
                  <p className="Sub-heading">Connect Us At:</p>
                  <p><i className="bi bi-telephone-fill"></i>+91 XXXXXXXXXX</p>
                  <p><i className="bi bi-envelope-fill"></i>samplemail@gmail.com</p>                     

              </div>
              <hr/>
          <div className="copyright"><p>©2021 Providence Academy | All Rights Reserved</p></div>

      </div>
    
</div>

</div>
  );
}

export default Footer;
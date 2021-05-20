import React from "react";

function Contact() {
  return (
    <div className="contact site-section">
      <div className="container">
              <div ><h6>Let's Have A Chat</h6></div>
              <div className="Text-Bold"><h2>Learn How We Help To Gain Success.</h2></div>
              <div className="row">
                <div className="col-md-6">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col-md-6">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div> <br/>
              </div>
              <div className="col-md-12">
                <br/><label>Phone Number:</label>
                <input type="number" className="form-control" id="number" placeholder="Mobile number"/><br/>
              </div>
              <div className="col-md-12">
                <label>Email Id:</label>
                <input type="email" className="form-control" id="inputEmail3" placeholder="name@gmail.com"/><br/>
              </div>
              <div className="col--md-12">
                <label>Message</label>
               <textarea className="form-control" rows="5" id="" placeholder="Type a message..."></textarea> <br/>
              </div>
              <div className="col-md-12 button">
               <button type="submit" className="btn btn-success">Send Message</button>
              </div>
              </div><br /><br />
      </div>
  );
}

export default Contact;
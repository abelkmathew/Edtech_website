// import { render } from "@testing-library/react";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from './Assets/logo.png';


function Navigation(props) {
  return (
    <div className="navigation ">
      <div className="site-header fixed-top">
            <nav id='primary-navigation' className="navbar navbar-expand-lg navbar-light nav-pills nav-fill">
                <div className="container">
                    <div className="navbar-header navbar-brand">    
                        <a href="/" className='header-logo'><img class="logo" src={logo} alt="Logo"></img>Providence Academy</a>
                    </div>
                    <div className="mobile-menu-icon">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button></div>
                    <div className="main-menu collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">

                            <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link className="nav-link" to="/">HOME</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                                <Link className="nav-link" to="/about">ABOUT US</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/course" ? "active" : ""}`}>
                                <Link className="nav-link" to="/courses">COURSES</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`}>
                                <Link className="nav-link" to="/contact">CONTACT US</Link></li>
                            <li className={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
                                <Link className="nav-link loginicon btn" to="/login"><a className="loginbtn" 
                                >LOGIN/REGISTER</a></Link></li>
                           

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default withRouter(Navigation);
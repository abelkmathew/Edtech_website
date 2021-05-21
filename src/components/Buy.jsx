import { Link } from "react-router-dom";

import cart_image from './Assets/img9.png';

function Buy() {
    return (
        <div className="site-section cart-menu">
            <div className="container">
                <div className="section-title"><h1>Shopping Cart</h1></div>
                <div className="row">
                    <div className="col-md-7"><br />
                        <img class="img-fluid" src={cart_image} alt="Cart-Img" />
                    </div>
                    <div className="col-md-5"><br /><br />
                        <div className="summary-box"><h2>Summary</h2><br/>
                            <h5>Course Added</h5><hr />
                            <p>Original price: <div className="amt red-100"><h6>Rs. 2999</h6></div></p>
                            <p >Discount price:<div className="amt"><h6>Rs. 1500</h6></div></p>
                            <hr />
                            <p>Total: <div className="amt"><p><h5>Rs. 1499</h5></p></div></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Illo vitae temporibus, harum aspernatur sint blanditiis velit repudiandae eveniet quo quis. </p>  
                            <div className="payment-btn "><Link className="login-redirect loginicon btn" to="/login">
                                <a className=" btn-lg loginbtn" >Login to continue</a></Link>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
        </div>
    )
}

export default Buy

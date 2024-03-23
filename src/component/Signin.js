import React from 'react'
import "./Signinup.css";
import imgbook from "../src/book-icon-146.png";
function Signin(props) {
  var colors;
  if(props.style)
  {
    colors="text-success"
  }
  else{
    colors="text-danger"
  }
  return (
    <div className="container ">
      <div className="row ">
        <div className="left  col-lg-6 col-md-12 col-sm-3">
          <img src={imgbook} alt="" />
          <h2 className="text-align left-heading">
            Discover a word of <br />possibilities at your fingertips{" "}
          </h2>
          <span className="text-align">
          One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time." – Carl Sagan
          </span>
        </div>
        <div className="Right  bg-white col-lg-6 col-md-12 col-sm-3">
          <a id="back-btn" href="#">&lt; Back</a>
          <h2 className="text-align">Welcome Back Leonard </h2>
          <span className="text-align">
            Lorem ipsum dolor sit amet consectetur adiEvpisicing elit.
          </span>
          <form onSubmit={props.submit}>
            <label htmlFor="emial">Email Address</label> <br />
            <input type="email" name='email' placeholder="xyz@gmail.com" /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" name='password' placeholder="Password" /><br />
            <p className={colors}>{props.message}</p>
            <button id="btn-1" type="submit" ><a href="#">Sign in</a></button><br />
            <button type="button" onClick={props.google}><a href="#">Sign in with Google</a></button><br />
            <p >don't have an account?<a href="#" onClick={props.changepage}>Signup</a></p>
            <p className={props.style}>{props.message}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin

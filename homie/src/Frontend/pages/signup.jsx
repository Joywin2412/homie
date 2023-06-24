// signup.jsx

import React from 'react';
import "./signup.module.css";
import image from "../../assets/spacejoy-9M66C_w_ToM-unsplash.jpg";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re_password").value;

    if (name === "" || email === "" || password === "" || rePassword === "") {
      alert("Please fill in all fields");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Sign up successful!");

    // Further logic can be added here, such as making an API request to send the form data to the server.
  };

  const togglePassword = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className='body'>
    <div className="main">
        
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <form onSubmit={handleSubmit} id="signup-form" className="signup-form">
              <h2 className="form-title">Create account</h2>
              <div className="form-group">
                <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-input" name="password" id="password" placeholder="Password" />
                <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" onClick={togglePassword}></span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="re_password"
                  id="re_password"
                  placeholder="Repeat your password"
                />
              </div>
              <div className="form-group">
                <input type="submit" name="submit" id="submit" className="form-submit" value="Sign up" />
              </div>
            </form>
            <div className="loginhere">
              Have already an account? <a href="login.jsx" className="loginhere-link">Login here</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Signup;

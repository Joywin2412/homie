import React from 'react';
import "./signup.module.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  
    e.preventDefault();
    
    // Get form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Perform form validation
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND}/api/users/login`,
        { email, password },
        config
      );
      
      
      console.log("Login Successful");
      localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
    } catch (error) {
      console.log(error);
      
    }
    
    
  };

  return (
    <div className='bodySignup'>
    <div className="main">
    
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <form onSubmit={handleSubmit} id="signup-form" className="signup-form">
              <h2 className="form-title">Login</h2>
              <div className="form-group">
                <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-input" name="password" id="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="submit" name="submit" id="submit" className="form-submit" value="Login" />
              </div>
            </form>
            <div className="loginhere">
              Don't have an account? <button onClick={()=>(navigate("/signup"))} className="loginhere-link">Create an account here</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Login;

import React from 'react';
import "./signup.module.css";


function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Perform form validation
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // Make API request or perform other authentication logic
    // Replace the code below with your own implementation
    // Example: Making a mock API request using Fetch API
    fetch('https://api.example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful, redirect user or perform desired action
          console.log('Login successful');
        } else {
          // Login failed, display error message or handle accordingly
          console.log('Login failed');
        }
      })
      .catch((error) => {
        // Handle any network or server errors
        console.error('Error occurred:', error);
      });
  };

  return (
    <div className='body'>
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
              Don't have an account? <a className="a login-here link" href="signup.html" >Create an account here</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Login;

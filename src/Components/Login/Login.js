import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />          
          <button>Sign In</button>
        </form>
      </div>
      <p>
        By creating an account, you agree to Amazon's Conditions of Use and
        Privacy Notice.
      </p>
      <button>Create your Amazon Account</button>
    </div>
  );
}

export default Login;

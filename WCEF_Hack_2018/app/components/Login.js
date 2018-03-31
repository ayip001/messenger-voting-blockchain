import React from 'react';
import { Link } from 'react-router-dom';

const Login = ({ toggleLogin, loggedIn }) => (
  <div className="centered">
    <a href="#">Address: 0xDE9f1ad33D569A675034255e110de122AB2Bf467</a>
    <h2>Balance: 14.928567 ETH</h2>
    <div className="google-btn">
      <div className="google-icon-wrapper">
      </div>
      <p className="btn-text"><b>Sign in with your key</b></p>
    </div>
  </div>
);

export default Login;

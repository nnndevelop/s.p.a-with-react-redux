import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NotFound = () => {
  return (
    <div className='main-box'>
      <div className="message-box">
        <h1>404</h1>
        <p>Page not found</p>
        <div className="buttons-con">
          <div className="action-link-wrap">
            <Link to="/" className="link-button">
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

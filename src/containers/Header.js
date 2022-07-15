import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui pointing menu" style={{padding: "4px 30px"}}>
      <Link to='/' className="active item">Home</Link>
      <div className="right menu">
        <div className="ui vertical animated button" tabindex="0">
          <div className="hidden content">Shop</div>
          <div className="visible content">
            <i className="shop icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

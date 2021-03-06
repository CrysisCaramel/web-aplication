import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import personal from "../../images/personal.jpg";
import cart from "../../images/cart.jpg";
import "./userBlock.sass";

const UserBlock = (props) => {
  const { method } = props;
  return (
    <div className="user-block">
      <div className="user-block__personal"
        onClick={method}>
        <img src={personal} alt="personal" className="user-block__img"/>
      </div>
      <Link to="/cart" className="user-block__cart">
        <img src={cart} alt="cart" className="user-block__img"></img>
      </Link>
    </div>
  );
};

UserBlock.propTypes = {
  method: PropTypes.func
};

export default UserBlock;

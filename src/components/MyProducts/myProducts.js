import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "../Item";

const MyProducts = ({ arrayOfMyProducts }) => {
  return (
    <div className="myProducts">
      {arrayOfMyProducts.map(product => {
        return <Item key={product.id} {...product}/>;
      }
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.products;
};

MyProducts.propTypes = {
  arrayOfMyProducts: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(MyProducts);

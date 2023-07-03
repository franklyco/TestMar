/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardProduct = ({ className, href }) => {
  return (
    <div className={`card-product ${className}`}>
      <div className="btn-cart">
        <div className="overlap-group">
          <div className="add-to-bag">ADD TO BAG</div>
        </div>
      </div>
      <img
        className="rectangle"
        alt="Rectangle"
        src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-13-8@2x.png"
      />
      <div className="element">$74.00</div>
      <a className="flower-acid-algae-s" href={href} rel="noopener noreferrer" target="_blank">
        Flower Acid Algae Sérum
      </a>
    </div>
  );
};

CardProduct.propTypes = {
  href: PropTypes.string,
};

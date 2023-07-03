/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconsHoriz = ({
  className,
  groupClassName,
  organicFood = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/organic-food-1-3@2x.png",
  groupClassNameOverride,
  wet = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/wet-2-1@2x.png",
  rectangle = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-8-17.svg",
  halfHeart = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/half-heart-1-3@2x.png",
}) => {
  return (
    <div className={`icons-horiz ${className}`}>
      <div className="product-icons-6">
        <div className="text-wrapper-3">Vegan</div>
        <div className={`group-4 ${groupClassName}`}>
          <img className="img-4" alt="Organic food" src={organicFood} />
        </div>
      </div>
      <div className="product-icons-6">
        <div className="text-wrapper-3">Hydrating</div>
        <div className={`group-4 ${groupClassNameOverride}`}>
          <img className="img-4" alt="Wet" src={wet} />
        </div>
      </div>
      <div className="product-icons-6">
        <div className="text-wrapper-3">Organic</div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-4">
            <img className="rectangle-8" alt="Rectangle" src={rectangle} />
            <img className="half-heart-2" alt="Half heart" src={halfHeart} />
          </div>
        </div>
      </div>
    </div>
  );
};

IconsHoriz.propTypes = {
  organicFood: PropTypes.string,
  wet: PropTypes.string,
  rectangle: PropTypes.string,
  halfHeart: PropTypes.string,
};

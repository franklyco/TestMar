/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ReviewStars = ({
  className,
  starHalf = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-half-1.svg",
  starFull = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-7.svg",
  img = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-7.svg",
  starFull1 = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-7.svg",
  starFull2 = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-7.svg",
}) => {
  return (
    <div className={`review-stars ${className}`}>
      <div className="element-reviews">74 Reviews</div>
      <img className="star-half" alt="Star half" src={starHalf} />
      <img className="star-full" alt="Star full" src={starFull} />
      <img className="star-full-2" alt="Star full" src={img} />
      <img className="star-full-3" alt="Star full" src={starFull1} />
      <img className="star-full-4" alt="Star full" src={starFull2} />
    </div>
  );
};

ReviewStars.propTypes = {
  starHalf: PropTypes.string,
  starFull: PropTypes.string,
  img: PropTypes.string,
  starFull1: PropTypes.string,
  starFull2: PropTypes.string,
};

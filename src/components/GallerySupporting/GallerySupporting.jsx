/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GallerySupporting = ({
  className,
  rectangle = "https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-7-1@2x.png",
}) => {
  return (
    <div className={`gallery-supporting ${className}`}>
      <img
        className="rectangle-2"
        alt="Rectangle"
        src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-5-1@2x.png"
      />
      <img className="rectangle-3" alt="Rectangle" src={rectangle} />
      <img
        className="rectangle-4"
        alt="Rectangle"
        src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-6-1@2x.png"
      />
      <img
        className="rectangle-5"
        alt="Rectangle"
        src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-8-14@2x.png"
      />
    </div>
  );
};

GallerySupporting.propTypes = {
  rectangle: PropTypes.string,
};

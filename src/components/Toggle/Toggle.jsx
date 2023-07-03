/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Toggle = ({ className, text = "How To Use" }) => {
  return (
    <div className={`toggle ${className}`}>
      <div className="overlap-group-2">
        <div className="rectangle-6" />
        <img
          className="group-2"
          alt="Group"
          src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/group-3-3@2x.png"
        />
        <div className="care-details">{text}</div>
      </div>
    </div>
  );
};

Toggle.propTypes = {
  text: PropTypes.string,
};

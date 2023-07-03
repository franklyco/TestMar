/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const IconsGridPack = ({ className }) => {
  return (
    <div className={`icons-grid-pack ${className}`}>
      <div className="product-icons">
        <div className="text-wrapper">All Natural Ingredients</div>
        <div className="overlap">
          <div className="organic">Organic</div>
          <div className="group">
            <div className="div">
              <img
                className="img"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-8-13.svg"
              />
              <img
                className="half-heart"
                alt="Half heart"
                src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/half-heart-1-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product-icons-2">
        <p className="text-wrapper">
          Plant Based <br />
          Vitamins &amp; Ingredients
        </p>
        <div className="text-wrapper-2">Vegan</div>
        <div className="img-wrapper">
          <img
            className="img-2"
            alt="Organic food"
            src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/organic-food-1-2@2x.png"
          />
        </div>
      </div>
      <div className="product-icons-3">
        <p className="text-wrapper">Sourced for environmental &amp; locale well-being</p>
        <div className="text-wrapper-2">Ethical</div>
        <div className="img-wrapper">
          <img
            className="img-2"
            alt="Ok"
            src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/ok-2-1@2x.png"
          />
        </div>
      </div>
      <div className="product-icons-4">
        <p className="text-wrapper">
          Babe Tested
          <br /> Never On Animals
        </p>
        <div className="text-wrapper-2">Cruelty-Free</div>
        <div className="img-wrapper">
          <img
            className="img-3"
            alt="Puffin bird"
            src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/puffin-bird-1-1@2x.png"
          />
        </div>
      </div>
      <div className="product-icons-5">
        <div className="text-wrapper">Dermatologist Recommended</div>
        <div className="text-wrapper-2">Hydrating</div>
        <div className="img-wrapper">
          <img
            className="img-3"
            alt="Doctor female"
            src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/doctor-female-1-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

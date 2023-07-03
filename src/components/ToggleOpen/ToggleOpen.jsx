/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ToggleOpen = ({ className }) => {
  return (
    <div className={`toggle-open ${className}`}>
      <div className="overlap-group-3">
        <div className="rectangle-7" />
        <p className="PROPRIETARY-WILD">
          PROPRIETARY, WILD COLLECTED ALGAE <br />
          Stimulates natural hyaluronic acid synthesis and is loaded with phytonutrients and fatty acids to plump, firm
          and smooth.
          <br />
          <br />
          PLANKTON
          <br />
          Powerful antioxidants with high fatty acids that retain moisture and strengthens hydration barrier.
          <br />
          <br />
          MORINGA
          <br />
          Miracle superfood with 90+ nutrients, 46 antioxidants and vitamins A, B, C, D &amp; E for mega moisture and an
          insanely radiant glow.
          <br />
          <br />
          KALAHARI WATERMELON
          <br />
          Floods dry skin with vitamins A, C &amp; E and linoleic, oleic, and palmitic fatty acids to keep skin supple
          and glowing.
        </p>
        <div className="title">
          <img
            className="group-3"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/group-3-4@2x.png"
          />
          <div className="ingredients">Ingredients</div>
        </div>
      </div>
    </div>
  );
};

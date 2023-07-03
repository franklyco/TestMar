/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CardProduct } from "../CardProduct";
import "./style.css";

export const SectionRelated = ({ className, href, href1, href2, href3 }) => {
  return (
    <div className={`section-related ${className}`}>
      <div className="container-related">
        <div className="cards-products">
          <CardProduct className="card-product-instance" href={href} />
          <CardProduct className="design-component-instance-node" href={href1} />
          <CardProduct className="card-product-2" href={href2} />
          <CardProduct className="card-product-3" href={href3} />
        </div>
        <div className="similar-skincare">Similar Skincare</div>
      </div>
    </div>
  );
};

SectionRelated.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
};

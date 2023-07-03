import React from "react";
import { GallerySupporting } from "../../components/GallerySupporting";
import { IconsGridPack } from "../../components/IconsGridPack";
import { IconsHoriz } from "../../components/IconsHoriz";
import { ReviewStars } from "../../components/ReviewStars";
import { SectionRelated } from "../../components/SectionRelated";
import { SectionReviews } from "../../components/SectionReviews";
import { Toggle } from "../../components/Toggle";
import { ToggleOpen } from "../../components/ToggleOpen";
import "./style.css";

export const ProductHero = () => {
  return (
    <div className="product-hero">
      <div className="div-2">
        <SectionReviews className="section-reviews-instance" />
        <SectionRelated
          className="section-related-products"
          href="https://themarabeauty.com/products/flower-acid-algae-serum"
          href1="https://themarabeauty.com/products/flower-acid-algae-serum"
          href2="https://themarabeauty.com/products/flower-acid-algae-serum"
          href3="https://themarabeauty.com/products/flower-acid-algae-serum"
        />
        <div className="overlap-2">
          <div className="sec-details">
            <div className="group-5">
              <IconsGridPack className="icons-grid-pack-instance" />
              <div className="text-wrapper-4">Conscious Of Your World</div>
              <img
                className="rectangle-9"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-1701.png"
              />
            </div>
            <GallerySupporting
              className="gallery-supporting-instance"
              rectangle="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-7@2x.png"
            />
          </div>
          <div className="sec-details-2">
            <div className="toggles">
              <Toggle className="toggle-instance" />
              <Toggle className="toggle-2" text="Care Details" />
              <ToggleOpen className="toggle-open-instance" />
            </div>
            <div className="group-6" />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="div-wrapper">
                <div className="overlap-group-5">
                  <div className="ellipse" />
                  <img
                    className="leaf"
                    alt="Leaf"
                    src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/leaf-1@2x.png"
                  />
                </div>
              </div>
              <div className="linked-path-group">
                <img
                  className="linked-ellipse"
                  alt="Linked ellipse"
                  src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/-linked--ellipse-1@2x.png"
                />
                <div className="overlap-4">
                  <div className="overlap-5">
                    <div className="overlap-6">
                      <div className="copy-certified-vegan">C</div>
                      <div className="copy-certified-vegan-2">e</div>
                      <div className="copy-certified-vegan-3">r</div>
                      <div className="copy-certified-vegan-4">t</div>
                    </div>
                    <div className="copy-certified-vegan-5">i</div>
                    <div className="copy-certified-vegan-6">f</div>
                  </div>
                  <div className="copy-certified-vegan-7">i</div>
                </div>
                <div className="copy-certified-vegan-8">e</div>
                <div className="overlap-7">
                  <div className="copy-certified-vegan-9">d</div>
                  <div className="overlap-8">
                    <div className="copy-certified-vegan-10" />
                    <div className="overlap-9">
                      <div className="copy-certified-vegan-11">V</div>
                      <div className="copy-certified-vegan-12">e</div>
                      <div className="copy-certified-vegan-13">g</div>
                      <div className="copy-certified-vegan-14">a</div>
                      <div className="copy-certified-vegan-15">n</div>
                      <div className="copy-certified-vegan-16" />
                      <div className="copy-certified-vegan-17">&amp;</div>
                      <div className="copy-certified-vegan-18" />
                    </div>
                    <div className="copy-certified-vegan-19">G</div>
                  </div>
                  <div className="copy-certified-vegan-20">l</div>
                </div>
                <div className="copy-certified-vegan-21">u</div>
                <div className="copy-certified-vegan-22">t</div>
                <div className="copy-certified-vegan-23">e</div>
                <div className="copy-certified-vegan-24">n</div>
              </div>
            </div>
          </div>
          <div className="product-hero-grid">
            <div className="gallery">
              <img
                className="rectangle-10"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-1.svg"
              />
              <div className="overlap-group-6">
                <div className="rectangle-11" />
                <img
                  className="rectangle-12"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-4.png"
                />
                <img
                  className="rectangle-13"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-3.png"
                />
              </div>
            </div>
            <div className="details">
              <div className="qty-cart">
                <div className="btn-cart-2">
                  <div className="add-to-bag-wrapper">
                    <div className="add-to-bag-2">ADD TO BAG</div>
                  </div>
                </div>
                <div className="wrap-qty">
                  <div className="overlap-10">
                    <div className="text-wrapper-5">+</div>
                    <div className="div-3" />
                  </div>
                  <div className="div-3">
                    <div className="text-wrapper-6">-</div>
                  </div>
                  <div className="overlap-11">
                    <div className="text-wrapper-5">1</div>
                    <div className="div-3" />
                  </div>
                </div>
                <div className="text-wrapper-7">$72.00</div>
              </div>
              <div className="product-intro">
                <div className="heading">
                  <ReviewStars
                    className="review-stars-instance"
                    img="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-3.svg"
                    starFull="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-3.svg"
                    starFull1="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-3.svg"
                    starFull2="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-full-3.svg"
                    starHalf="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/star-half.svg"
                  />
                  <div className="text-wrapper-8">Universal Face Oil</div>
                  <div className="text-wrapper-9">Algae + Moringa®</div>
                </div>
              </div>
              <div className="product-desc">
                <div className="text-wrapper-10">Product Details</div>
                <p className="our-award-winning">
                  Our award-winning Universal Face Oil is&nbsp;&nbsp;created for all skin types, packed with age-defying
                  algae, plankton extract, and four superfood plant oils to replenish and hydrate tired, dry skin.
                  <br />
                  <br />
                  Our Algae + Moringa® formula is high in essential fatty acids to plump up the skin while nutrient rich
                  superfood plant oils give you a gorgeous glow, quench thirsty skin, and visibly reduce fine lines and
                  wrinkles.
                </p>
              </div>
              <img
                className="divider"
                alt="Divider"
                src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/divider.svg"
              />
              <IconsHoriz
                className="icons-horiz-instance"
                groupClassName="icons-horiz-2"
                groupClassNameOverride="icons-horiz-2"
                halfHeart="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/half-heart-1@2x.png"
                organicFood="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/organic-food-1@2x.png"
                rectangle="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/rectangle-8-2.svg"
                wet="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/wet-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="overlap-12">
            <div className="navbar" />
            <img
              className="maralogo"
              alt="Maralogo"
              src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/maralogo-1-1.svg"
            />
            <div className="announcement" />
            <div className="text-wrapper-11">My Bag</div>
            <div className="text-wrapper-12">Shop</div>
            <img
              className="group-7"
              alt="Group"
              src="https://generation-sessions.s3.amazonaws.com/95cb29d44d2cff744788afc5ca522d06/img/group-2-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

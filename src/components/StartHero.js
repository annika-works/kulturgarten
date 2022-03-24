import React from "react";
import { Image } from "../../contentful";
import Illustration from "../assets/images/kugapi_logo.svg";
import HeroImage from "../assets/images/hero_img.jpg";
import Spiral from "../assets/svgs/spiral_01.svg";
import Heart from "../assets/svgs/heart.svg";

const FullSizeImage = ({ children }) => (
  <div className="fullSizeImageContainer">{children}</div>
);

function StartHero() {
  return (
    <>
      <section className="wrapper start">
        <div className="startDiv">
          <Image src={Illustration} alt="flowers" />
        </div>
        <div className="startDiv">
          <h2 className="hero">
            Ein Garten voller <span>Liebe</span>.
          </h2>
        </div>
      </section>
      <section className="wrapper" style={{position: 'relative'}}>
          <Image src={Spiral} alt="decoration" className="spiral" />
          <Image src={Heart} alt="decoration" className="heart" />
          <FullSizeImage>
            <Image src={HeroImage} alt="garden gloves on a bench" />
          </FullSizeImage>
      </section>
    </>
  );
}

export default StartHero;

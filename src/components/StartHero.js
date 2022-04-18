import React from "react";
import { FullSizeImage, Image } from "../../contentful";
import Illustration from "../assets/images/kugapi_logo.svg";
import HeroImage from "../assets/images/hero_img.jpg";
import Spiral from "../assets/svgs/spiral_01.svg";
import Heart from "../assets/svgs/heart.svg";

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
          <Image src={Spiral} aria-hidden="true" alt="decoration" className="spiral" />
          <Image src={Heart} aria-hidden="true" alt="decoration" className="heart" />
          <FullSizeImage>
            <Image src={HeroImage} alt="garden gloves on a bench" />
          </FullSizeImage>
      </section>
    </>
  );
}

export default StartHero;

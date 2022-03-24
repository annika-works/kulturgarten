import React from "react";
import { Image } from "../../contentful";
import Illustration from "../assets/images/kugapi_logo.svg";
import HeroImage from "../assets/images/hero_img.jpg";

const FullSizeImage = ({ children }) => (
  <div className="fullSizeImageContainer">{children}</div>
);

function StartHero() {
  return (
    <>
      <section className="wrapper start">
        <div className="startDiv">
          <img src={Illustration} alt="flowers" />
        </div>
        <div className="startDiv">
          <h2 className="hero">
            Ein Garten voller <span>Liebe</span>.
          </h2>
        </div>
      </section>
      <section className="wrapper">
        <FullSizeImage>
          <Image src={HeroImage} alt="gloves on a bench" />
        </FullSizeImage>
      </section>
    </>
  );
}

export default StartHero;

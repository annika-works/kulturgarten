import React from "react";
import { Image } from "../../contentful";
import "./StartHero.scss";
import HeroImage from "../assets/images/hero_image.jpg";
import Heart from "../assets/svgs/heart.svg";

function StartHero() {
  return (
    <>
      <section className="wrapper start">
        <div className="start__heading">
          <h2 className="title">
            Ein Garten voller Liebe.
          </h2>
            <div className={"start__icon-container"}>
                <Image src={Heart} alt={""} className={"start__heart"} />
                <Image src={Heart} alt={""} className="start__heart-two" />
            </div>
            <p className={"start__subtitle"}>
                Schön, dass du hier bist! Wir sind ein Gartenkollektiv im Herzen Pinnebergs – offen für alle, die Lust haben auf Gemeinschaft, Gärtnern, Kultur und gute Gespräche.
            </p>
        </div>
      </section>
      <section className="wrapper heroImage">
          <div className={"start__img-container"}>
              <figure className="start__hero-img-container">
                <Image src={HeroImage} className="start__img" alt="" />
              </figure>
          </div>
      </section>
    </>
  );
}

export default StartHero;

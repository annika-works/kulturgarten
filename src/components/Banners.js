import React from "react";
import { FullSizeImage, Image } from "../../contentful";
import KinoBanner from "../assets/images/kino_banner.svg";
import { Link } from "gatsby";

function StartHero() {
  return (
    <>
      <section className="wrapper heroImage">
        <Link to="/veranstaltungen" alt="Gehe zu Veranstaltungen. Dieser Link öffnet eine Unterseite im selben Fenster.">
          <FullSizeImage>
            <Image src={KinoBanner} alt="Gartenhandschuhe auf einer Bank" />
          </FullSizeImage>
        </Link>
      </section>
    </>
  );
}

export default StartHero;

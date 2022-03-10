import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Title } from "./common/Title";

const Partner = () => {
    return (
      <section className="wrapper utopie" id="partner">
        <Title title="Partner">
          Ein Netzwerk voller <span>Support</span>.
        </Title>
        <div className="contentWer">
              <StaticImage src='../assets/images/ubg.jpeg' style={{width: '50%'}}></StaticImage>
        </div>
      </section>
    );
  };
  
  export default Partner;
import React from "react";
import { Image } from "../../contentful";
import { usePartners } from "../hooks/use-partners";
import { Title } from "./common/Title";

const Partner = () => {
  const partnerData = usePartners();
  return (
    <section className="wrapper utopie" id="partner">
      <Title title="Partner">
        Ein Netzwerk voller <span>Support</span>.
      </Title>
      <div className="partners">
        {partnerData.partnerImages.map((image, i) => (
          <div className="partner" key={i}>
            <Image alt={image.title} src={image.file.url}></Image>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
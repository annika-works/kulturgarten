import React from "react";
import { Image } from "../../contentful";
import { usePartners } from "../hooks/use-partners";
import { Title } from "./common/Title";
import './Partner.scss';

const Partner = () => {
  const partnerData = usePartners();
  return (
    <section className="wrapper utopie" id="partner">
      <Title title="Partner">
        Ein Netzwerk voller Support.
      </Title>
      <ul className="partners">
        {partnerData.partnerImages.map((image, i) => (
          <li className="partner" key={i}>
            <Image alt={image.title} src={image.file.url}></Image>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partner;
import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { imprintStyling } from "../../contentful";
import Seo from "../components/common/Seo";
import { Title } from "../components/common/Title";
import Footer from "../components/Footer";

const imprintTemplate = ({ pageContext }) => {
  const { titel, content } = pageContext.data;

  const seo = {
    title: `Kulturgarten Pinneberg e.V.: ${titel}`,
    description: "Das Impressum des Kulturgarten Pinneberg e.V.. Wir verwandeln 1 Hektar verwildertes Land in einen bunten Gemeinschaftsgarten und kreativen Rückzugsort von der Stadt. Kommt vorbei und packt mit an!",
    ogImage: ''
  }

  return (
    <>
      <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage}/>
      <nav style={{ position: "relative" }}>
        <Link to={"/"}>Back</Link>
      </nav>
      <main>
        <section className="wrapper utopie">
          <div className="contentSection">
            <Title title="Zum Verein">{titel}</Title>
            {renderRichText(content, imprintStyling)}
          </div>
        </section>
      </main>
      <Footer position="fixed" />
    </>
  );
};

export default imprintTemplate;

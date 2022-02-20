import { Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { imprintStyling } from "../../contentful";
import { Title } from "../components/common/Title";
import Footer from "../components/Footer";

const imprintTemplate = ({ pageContext }) => {
  const { titel, content } = pageContext.data;

  return (
    <>
      <nav style={{position: 'relative'}}>
        <Link  to={"/"}>
          Back
        </Link>
      </nav>
      <main>
        <section className="wrapper utopie">
          <div className="contentWer">
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

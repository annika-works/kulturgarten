import React from "react";
import { FullSizeImage, Image, Text } from "../../contentful";
import { Title } from "../components/common/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const blogEntryPageTemplate = ({ pageContext }) => {
  const { titel, datum, content, blogfoto } = pageContext.data;
    const date = datum => new Date(datum).toLocaleDateString("de-DE");
  console.log(pageContext);

  return (
    <>
      <Header />
      <section className="wrapper utopie">
        <article className="blogEntryContent">
          <h4>{titel}</h4>
          <FullSizeImage>
            <Image src={blogfoto.file.url} alt={blogfoto.title} />
          </FullSizeImage>
          <date>{date(datum)}</date>
          <Text>{renderRichText(content)}</Text>
        </article>
      </section>
      <Footer position="fixed" />
    </>
  );
};

export default blogEntryPageTemplate;

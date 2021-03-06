import React from "react";
import {
  blogEntryContentStyling,
  FullSizeImage,
  Image,
  Text,
} from "../../contentful";
import Header from "../components/Header";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Footer from "../components/Footer";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Seo from "../components/common/Seo";

const blogEntryPageTemplate = ({ pageContext }) => {
  const { titel, datum, content, blogfoto, slug, breadcrumb, kurzbeschreibung } =
    pageContext.data;
  const date = (datum) => new Date(datum).toLocaleDateString("de-DE");

  const seo = {
    title: titel,
    description: kurzbeschreibung,
    ogImage: blogfoto.file.url
  }

  return (
    <>
      <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage}/>
      <Header />
      <section className="wrapper utopie">
        <article className="blogEntryContent">
          <header>
            <Breadcrumbs titel={breadcrumb} slug={slug} />
            <h2>{titel}</h2>
            <p>{kurzbeschreibung}</p>
          </header>
          <FullSizeImage>
            <Image src={blogfoto.file.url} alt={blogfoto.title} />
          </FullSizeImage>
          <article>
            <Text className="datum">
              <time dateTime={datum} aria-label="date of release">{date(datum)}</time>
            </Text>
            {renderRichText(content, blogEntryContentStyling)}
          </article>
        </article>
      </section>
      <Footer position="fixed" />
    </>
  );
};

export default blogEntryPageTemplate;

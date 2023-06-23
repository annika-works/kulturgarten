import React from "react";
import { Title } from "../components/common/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/common/Seo";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { blogEntryContentStyling, Image } from "../../contentful";

const eventsPageTemplate = ({ pageContext }) => {
  const { filme } = pageContext.data;
  const date = (datum) => new Date(datum).toLocaleDateString("de-DE");

  const seo = {
    title: "Kulturgarten Pinneberg e.V.: Veranstaltungen",
    description: "Verpasse keine unserer Veranstaltungen!",
    ogImage:
      "http://images.ctfassets.net/36ul82y90g9q/3d4zbFdAuJ4S72GtTm4Q1Z/3f5c2e09cea50e9b6badfd46ced6c902/IMG_7809_websize.jpg",
  };
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        ogImage={seo.ogImage}
      />
      <Header />
      <section className="wrapper utopie">
        <Title title="Veranstaltungen" className="blogPageTitle">
          Freiluftkino
        </Title>

        <table className="programTable">
          <tbody>
            {filme.map((film, _) => (
              <tr key={_} className="programTable__row">
                <td>
                  <time dateTime={film.datum}>{date(film.datum)}</time>
                </td>
                <td>{film.filmstart}</td>
                <td className="programTable__title">{film.titel}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filme.map((film, _) => (
          <article key={_ + "-article"} className="filmArticle">
            <Image
              src={film.foto?.url}
              alt={film.foto?.description}
              className="filmArticle__img"
            />
            <div className="filmArticle__header">
              <h3 className="filmArticle__title">{film.titel}</h3>
              <p className="filmArticle__extras">{film.filmstart}</p>
            </div>
            <div className="filmArticle__content">
              {renderRichText(film.beschreibung, blogEntryContentStyling)}
            </div>
          </article>
        ))}
      </section>
      <Footer position="fixed" />
    </>
  );
};

export default eventsPageTemplate;

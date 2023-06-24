import React from "react";
import { Title } from "./common/Title";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Image, blogEntryContentStyling } from "../../contentful";

const Kino = ({ filme }) => {
  const date = (datum) => new Date(datum).toLocaleDateString("de-DE");
  return (
    <section className="wrapper utopie">
      <Title title="Open Air Veranstaltungen" className="blogPageTitle">Freiluftkino</Title>

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
  );
};

export default Kino;

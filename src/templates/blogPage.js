import React from "react";
import { Image, Text } from "../../contentful";
import { Title } from "../components/common/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPageTemplate = ({ pageContext }) => {
  const { entries } = pageContext.data;
  const date = datum => new Date(datum).toLocaleDateString("de-DE");

  return (
    <>
      <Header />
      <section className="wrapper utopie">
        <Title title="Blog" className="blogPageTitle">
          Willkommen im <span>Projekt</span>!
        </Title>
        <Text className="blogPageDescription">
          In diesem Blog erzählen wir von unseren bisherigen Erfolgen, Arbeiten
          und Projekten, die im Kontext des KuGaPi Projektes so anfallen.
        </Text>

        {entries.map((entry, i) => (
          <article className="blogPageEntry" key={i}>
            <figure>
              <Image src={entry.blogfoto.file.url} alt={entry.blogfoto.title}></Image>
            </figure>
            <article>
              <time>{date(entry.datum)}</time>
              <h3>{entry.titel}</h3>
              <p>{entry.kurzbeschreibung}</p>
              <a href={`/blog/${entry.slug}`}>Lies mehr</a>
            </article>
          </article>
        ))}

      </section>
      <Footer position='fixed'/>
    </>
  );
};

export default blogPageTemplate;

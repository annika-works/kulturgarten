import React from "react";
import { Image, Text } from "../../contentful";
import { Title } from "../components/common/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/common/Seo";

const blogPageTemplate = ({ pageContext }) => {
  const { entries } = pageContext.data;
  const date = datum => new Date(datum).toLocaleDateString("de-DE");
  
  const seo = {
    title: "Kulturgarten Pinneberg e.V.: Blog",
    description: "Unser Blog über den Kulturgarten Pinneberg! Erfahre über alle Neuigkeiten, und was sonst noch so im Garten passiert.",
    ogImage: "http://images.ctfassets.net/36ul82y90g9q/3d4zbFdAuJ4S72GtTm4Q1Z/3f5c2e09cea50e9b6badfd46ced6c902/IMG_7809_websize.jpg"
  }
  return (
    <>
      <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage}/>
      <Header />
      <section className="wrapper utopie">
        <Title title="Blog" className="blogPageTitle">
          Willkommen im <span>Projekt</span>!
        </Title>
        <Text className="subtitle">
          In diesem Blog erzählen wir von unseren bisherigen Erfolgen, Arbeiten
          und Projekten, die im Kontext des KuGaPi Projektes anfallen.
        </Text>
        <ul className={"blogpage__blogposts"}>
            {entries.map((entry, i) => (
              <li className="blogPageEntry" key={i}>
                <figure>
                  <Image src={entry.blogfoto.file.url} alt={entry.blogfoto.title}></Image>
                </figure>
                <article>
                  <time dateTime={entry.datum}>{date(entry.datum)}</time>
                  <h3>{entry.titel}</h3>
                  <p>{entry.kurzbeschreibung}</p>
                  <a href={`/blog/${entry.slug}`} aria-label={entry.titel}>Lies mehr</a>
                </article>
              </li>
            ))}
        </ul>


      </section>
      <Footer position='fixed' />
    </>
  );
};

export default blogPageTemplate;

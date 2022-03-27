import React from "react";
import { Image, Text } from "../../contentful";
import { Title } from "../components/common/Title";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPageTemplate = ({ pageContext }) => {
    const { blogfoto, datum, kurzbeschreibung, titel} = pageContext.data;
    console.log(pageContext.data);
    const date = new Date(datum).toLocaleDateString('de-DE');

    return (
        <>
        <Header />
            <section className="wrapper utopie">
                <Title title="Blog">Willkommen im <span>Projekt</span>!</Title>
                <Text>In diesem Blog erzählen wir von unseren bisherigen Erfolgen, Arbeiten und Projekten, die im Kontext des KuGaPi Projektes so anfallen.</Text>

                <article className="blogEntry">
                    <Image src={blogfoto.file.url} alt={blogfoto.title}></Image>
                    <article>
                        <time>{date}</time>
                        <h3>{titel}</h3>
                        <p>{kurzbeschreibung} Lies mehr</p>
                    </article>
                </article>

            </section>
            <Footer/>
        </>
    )
}

export default blogPageTemplate;
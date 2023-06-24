import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from "../components/common/Seo";
import Kino from "../components/Freiluftkino";
import Calendar from "../components/Kalender";

const eventsPageTemplate = ({ pageContext }) => {
  const { filme, calendarDates } = pageContext.data;
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
      <Calendar data={calendarDates} />
      <Kino filme={filme}/>
      <Footer position="fixed" />
    </>
  );
};

export default eventsPageTemplate;

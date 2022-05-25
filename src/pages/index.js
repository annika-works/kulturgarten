import * as React from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Seo from "../components/common/Seo";
import Footer from "../components/Footer";

const IndexPage = () => {
  const seo = {
    title: "Kulturgarten Pinneberg e.V.",
    description: "Wir verwandeln 1 Hektar verwildertes Land in einen bunten Gemeinschaftsgarten und kreativen Rückzugsort von der Stadt. Kommt vorbei und packt mit an!",
    ogImage: "http://localhost:8000/static/hero_img-1ef8b5f27dce1ef85e13fa078914b698.jpg",
  };

  return (
    <React.Fragment>
      <Seo title={seo.title} description={seo.description} ogImage={seo.ogImage} />
      <main>
        <Header />
        <MainLayout />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default IndexPage;

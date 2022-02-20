import * as React from "react";
import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import Seo from "../components/common/Seo";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Seo />
      <main>
        <Header />
        <MainLayout />
        <Footer/>
      </main>
    </React.Fragment>
  );
};

export default IndexPage;

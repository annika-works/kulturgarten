import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

export default function Seo({ title, description, ogImage }) {
  const url = "www.kulturgarten-pinneberg.de";
  const keywords = "Garten, Pinneberg, Kulturgarten, Gemeinschaft, Kulturprojekt, Gartenprojekt, Rehmen";
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title lang="de">{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://${url}`} hrefLang="de-DE" />
        <html lang="de" amp />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`https://${url}${pathname}`} />
        <meta name="google-site-verification" content="YFAS9CXRiEIYag4CBOBf3H2pephA0QzpziAbtNvy0Lo" />
      </Helmet>
    </>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

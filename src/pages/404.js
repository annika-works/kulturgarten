import * as React from "react";
import { Link } from "gatsby";
import Seo from "../components/common/Seo";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <>
      <Seo />
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>404</h1>
        <p style={paragraphStyles}>
          Hoppla!{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          Wir konnten die Seite, die du gesucht hast, leider nicht finden.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Hier geht's zurück zur Startseite</Link>.
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;

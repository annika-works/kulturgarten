import React from "react";
import { Link } from "gatsby";

function Footer({position}) {

  const positioning = position === 'fixed' ? 'fixed' : 'relative';
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer" style={{ position: positioning}}>
      <Link to='/impressum'>&#169; {currentYear} Kulturgarten Pinneberg Verein e.V.</Link>
    </footer>
  );
}

export default Footer;

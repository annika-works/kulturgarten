import React from "react";
import { Link } from "gatsby";
import "./Footer.scss";

function Footer({position}) {

  const positioning = position === 'fixed' ? 'fixed' : 'relative';
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer" >
        <div className="footer__inner">
          <div className="footer__first-grid">
            <div className="footer__address">
              <h3 className={"footer__address-header"}>Kulturgarten Pinneberg e.V.</h3>
              <p>Rehmen 103</p>
              <p>25421 Pinneberg</p>
              <p>VR 2286 PI</p>
            </div>
            <div className={"footer__contact"}>
              <p>kulturgarten@posteo.de</p>
              <p>+46 234 646 23</p>
            </div>
          </div>
          <div className="footer__second-grid">
            <nav className={"footer__nav"}>
              <ul className={"footer__nav-list"}>
                <li><Link to='/#utopie'>Utopie</Link></li>
                <li><Link to='/#werWirSind'>Team</Link></li>
                <li><Link to='/veranstaltungen'>Events</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                {/*<li><a>FAQ</a></li>*/}
                {/*<li><a>Presse</a></li>*/}
              </ul>
              <ul className={"footer__nav-list"}>
                <li><Link to={'https://www.instagram.com/kulturgarten_pinneberg/'} target="_blank" rel="noreferrer">Instagram</Link></li>
                {/*<li><a href={""}>Facebook</a></li>*/}
                <li><Link to='https://assets.ctfassets.net/36ul82y90g9q/7cLw4w7eo0Nq9tfVCytyVT/e1486ac06dec2ea559911b0e1243ad4a/Kuga_Vereinssatzung_Neu.pdf' target="_blank" rel="noreferrer">Satzung</Link></li>
                <li><Link to='/impressum'>Impressum</Link></li>
                {/*<li><Link to={""}>Unterstütze uns</Link></li>*/}
              </ul>
            </nav>
          </div>
        </div>
      <div className={"footer__impressum"}>
        <Link to='/impressum'>&#169; {currentYear} Kulturgarten Pinneberg e.V.</Link>
      </div>
    </footer>
  );
}

export default Footer;

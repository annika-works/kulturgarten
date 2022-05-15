import React, { useState } from "react";
import { Link } from "../../contentful";
import { useHeader } from "../hooks/use-header";
import { Fade as Hamburger } from "hamburger-react";
import InstagramLogo from "../assets/svgs/instagram.svg";

function Header() {
  const headerData = useHeader();
  const [isOpen, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const NavLinks = () => (
    <>
      {headerData.links.map((link, i) => (
        <li key={i}>
          <Link href={link.href} pdf={link.pdf} onClick={closeModal}>
            {link.title}
          </Link>
        </li>
      ))}
      <li>
        <a href="https://www.instagram.com/kulturgarten_pinneberg/" aria-label="Go to Instagram">
          <img src={InstagramLogo} alt="" role="presentation" />
        </a>
      </li>
    </>
  );

  const MobileNav = () => (
    <section aria-label="mobile Navigation" className="mobileNavigation">
      <nav>
        <ul className="mobile">
          <NavLinks />
        </ul>
      </nav>
    </section>
  );

  return (
    <header>
      <nav className="nav">
        {isOpen && <MobileNav />}
        <div className="icon" aria-label="menu">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            size={20}
          />
        </div>
        <ul className="desktop">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { Link } from "../../contentful";
import { useHeader } from "../hooks/use-header";
import { Fade as Hamburger } from "hamburger-react";

function Header() {
  const headerData = useHeader();
  const [isOpen, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  }

  const NavLinks = () => (
    <>
      {headerData.links.map((link, i) => (
        <li key={i}>
          <Link href={link.href} pdf={link.pdf} onClick={closeModal}>
            {link.title}
          </Link>
        </li>
      ))}
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
        <span className="icon">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction="right"
            size={20}
          />
        </span>
        <ul className="desktop">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}

export default Header;

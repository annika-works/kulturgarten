import React from "react";
import { Link } from "../../contentful";
import { useHeader } from "../hooks/use-header";
import "./Header.module.scss";

function Header() {
  const headerData = useHeader();
  return (
    <header>
      <nav>
        {headerData.links.map((link, i) => (
          <Link href={link.href} pdf={link.pdf} key={i}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;

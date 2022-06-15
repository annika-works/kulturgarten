import React from "react";

const Breadcrumbs = ({slug, titel}) => {
  return (
    <nav className="breadcrumbs">
      <ol>
        <li>
          <a href="/blog/">
            <span>Blog</span>
          </a>
        </li>
        <li>
          <span aria-label="arrow icon" className="blogEntryTitle">
            {" > "}
          </span>
        </li>
        <li>
          <a href={`/blog/${slug}`}>
            <span className="blogEntryTitle">{titel}</span>
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

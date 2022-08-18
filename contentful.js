import React from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

export const Text = ({ children, className }) => (
  <p className={className}>{children}</p>
);

export const Link = ({ children, href, pdf, onClick }) => {
  if (pdf !== null) {
    const href = pdf.file.url.substring(2);
    return (
      <a href={`https://${href}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

export const FullSizeImage = ({ children }) => (
  <figure className="fullSizeImageContainer">{children}</figure>
);

export const imprintStyling = {
  renderNode: {
    /**
     * @param node
     * @param children
     * @returns {React.ReactNode}
     */
    [BLOCKS.HEADING_3]: function Paragraph(node, children) {
      return <h3 style={{ margin: "2rem 0 1rem 0" }}>{children}</h3>;
    },
  },
};
export const blogEntryContentStyling = {
  renderMark: {
    [MARKS.BOLD]: text => <span className="boldRawLink">{text}</span>,
  },
  renderNode: {
    /**
     * @param node
     * @param children
     * @returns {React.ReactNode}
     */
    [BLOCKS.PARAGRAPH]: function Paragraph(node, children) {
      return <p className="blogEntryParagraph">{children}</p>;
    },
    [INLINES.HYPERLINK]: ({ data }, node) => (
        <a
            href={data.uri}
            className="inlineLink"
            // target={`${data.uri.startsWith(website_url) ? '_self' : '_blank'}`}
            // rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}
        >
            {node[0]}
        </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      return (
        <img
          src={`https://${data.target.file.url}`}
          alt={data.target.title}
          className="rawImage"
        />
      );
    },
  },
};

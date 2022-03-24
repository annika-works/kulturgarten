import React from "react";
import { BLOCKS } from '@contentful/rich-text-types';

export const Text = ({ children, margin}) => <p style={{margin: margin}}>{children}</p>;

export const Link = ({ children, href, pdf}) => {
    if(pdf !== null) {
        const href = pdf.file.url.substring(2)
        return(
            <a href={`https://${href}`} target='_blank' rel='noreferrer'>{children}</a>
        )
    }
  return (<a href={href}>{children}</a>);
};

export const Image = ({src, alt, className}) => <img src={src} alt={alt} className={className} />

export const imprintStyling = {
    renderNode: {
           /**
         * @param node
         * @param children
         * @returns {React.ReactNode}
         */
            [BLOCKS.HEADING_3]: function Paragraph(node, children) {
                return(
                    <h3 style={{margin: '2rem 0 1rem 0'}}>{children}</h3>
                )
            }
    }
}
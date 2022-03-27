import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function Seo() {

    const title = 'Kulturgarten Pinneberg Verein e.V.';
    const description = 'Ein Garten voller Liebe in Pinneberg!';
    const url = 'www.kulturgarten-pinneberg.de';

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta charset="utf-8" />
                <link rel="canonical" href={`https://${url}`} hrefLang="de-DE" />
            </Helmet>
        </>
    );
}

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.shape({
        description: PropTypes.string,
    }),
};

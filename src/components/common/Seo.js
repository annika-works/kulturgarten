import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function Seo() {

    const title = 'Kulturgarten Pinneberg Verein e.V.';
    const description = 'Wir verwandeln 1 Hektar verwildertes Land in einen bunten Gemeinschaftsgarten und kreativen Rückzugsort von der Stadt. Kommt vorbei und packt mit an!';
    const url = 'www.kulturgarten-pinneberg.de';
    const keywords = 'Garten, Pinneberg, Kulturgarten, Gemeinschaft, Kulturprojekt, Gartenprojekt, Rehmen';

    return (
        <>
            <Helmet>
                <title lang="de">{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords}/>
                <link rel="canonical" href={`https://${url}`} hrefLang="de-DE" />
                <html lang="de" amp />
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

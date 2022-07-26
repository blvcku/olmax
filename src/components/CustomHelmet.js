import React from 'react';
import { Helmet } from 'react-helmet';
import Img from '../images/roboty-ziemne.jpg';
import useSiteMetadata from '../hooks/useSiteMetadata';

const CustomHelmet = (props) => {

    const {
        title:customTitle, 
        description:customDescription,
        keywords:customKeywords,
        img:customImg,
        siteURL:customSiteURL,
        type:customType,
    } = props;

    const { title, description, keywords, siteURL } = useSiteMetadata();

    return(
        <Helmet>
            <title>{customTitle || title}</title>
            <meta name='description' content={customDescription || description} />
            <meta name='keywords' content={customKeywords || keywords} />
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='theme-color' content='#ffffff' />
            <meta name='color-scheme' content='light' />
            <meta property='og:title' content={customTitle || title} />
            <meta property='og:type' content={customType || 'website'} />
            <meta property='og:description' content={customDescription || description} />
            <meta property='og:image' content={customImg || Img} />
            <meta property='og:locale' content='pl-PL' />
            <meta property='og:url' content={customSiteURL || siteURL} />
            <link rel='canonical' href={customSiteURL || siteURL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" /> 
        </Helmet>
    )
}

export default CustomHelmet;
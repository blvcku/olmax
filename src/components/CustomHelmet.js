import React from 'react';
import { Helmet } from 'react-helmet';
import Img from '../images/roboty-ziemne.jpg';
import useSiteMetadata from '../hooks/useSiteMetadata';

const CustomHelmet = (props) => {

    const { title: baseTitle, description: baseDescription, keywords: baseKeywords, siteURL: baseSiteURL } = useSiteMetadata();

    const {
        title = baseTitle, 
        description = baseDescription,
        keywords = baseKeywords,
        img = Img,
        siteURL = baseSiteURL,
        type,
    } = props;

    return(
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='theme-color' content='#ffffff' />
            <meta name='color-scheme' content='light' />
            <meta property='og:title' content={title} />
            <meta property='og:type' content={type || 'website'} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={img} />
            <meta property='og:locale' content='pl-PL' />
            <meta property='og:url' content={siteURL} />
            <link rel='canonical' href={siteURL} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" /> 
        </Helmet>
    )
}

export default CustomHelmet;
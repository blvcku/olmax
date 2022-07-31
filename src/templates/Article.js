import React from 'react'; 
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image'
import useSiteMetadata from '../hooks/useSiteMetadata';
import CustomHelmet from '../components/CustomHelmet';

const Article = ({data}) => {

    const { siteURL } = useSiteMetadata();
    const { title, description, keywords, createdAt, banner, article, slug } = data.contentfulArticle;
    const image = getImage(banner);
    console.log(article)
    return(
        <>
            <CustomHelmet title={title} description={description} keywords={keywords} img={image.images.fallback.src} siteURL={`${siteURL}/aktualnosci/${slug}`} type='article' />
        </>
    )
}

export default Article;

export const query = graphql`
    query Article($slug: String) {
        contentfulArticle:contentfulAktualnosci(slug: {eq: $slug}) {
            title
            keywords
            description
            createdAt
            slug
            banner {
                gatsbyImageData
            }
            article{
                raw
            }
        }
    }  
`;
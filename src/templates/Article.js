import React from 'react'; 
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image'
import useSiteMetadata from '../hooks/useSiteMetadata';
import CustomHelmet from '../components/CustomHelmet';
import HeroImage from '../components/article-related/hero-image/HeroImage';
import ArticleBody from '../components/article-related/article-body/ArticleBody';
import Footer from '../components/footer/Footer';

const Article = ({data}) => {

    const { siteURL } = useSiteMetadata();
    const { title, description, keywords, createdAt, banner, article, slug } = data.contentfulArticle;
    const imageSrc = getSrc(banner);

    return(
        <>
            <CustomHelmet title={title} description={description} keywords={keywords} img={imageSrc} siteURL={`${siteURL}/aktualnosci/${slug}`} type='article' />
            <HeroImage img={imageSrc} />
            <main>
                <ArticleBody title={title} createdAt={createdAt} description={description} article={article} />
            </main>
            <Footer />
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
                description
            }
            article{
                raw
                references{
                    ... on ContentfulAsset{
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            quality:100
                        )
                        description
                        __typename
                        contentful_id
                    }
                }
            }
        }
    }  
`;
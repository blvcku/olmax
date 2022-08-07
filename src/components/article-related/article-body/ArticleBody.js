import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import { ArticleBodyContainer, ArticleBodyWrapper, ArticleContentContainer, ArticleImageWrapper, Header } from "./ArticleBody.styles";

const renderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
            const { gatsbyImageData, description } = node.data.target;
            return(
                <ArticleImageWrapper>
                    <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
                </ArticleImageWrapper>
            )
        }
    }
}

const ArticleBody = ({article, title, description, createdAt}) => {
    return(
        <ArticleBodyContainer>
            <ArticleBodyWrapper>
                <Header>
                    <p>{new Date(createdAt).toLocaleDateString('pl-PL', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}</p>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Header>
                <ArticleContentContainer>
                    {renderRichText(article, renderOptions)}
                </ArticleContentContainer>
            </ArticleBodyWrapper>
        </ArticleBodyContainer>
    )
}

export default ArticleBody;
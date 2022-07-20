import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { NewsListItemContainer } from './NewsList.styles';

const NewsListItem = ({slug, title, description, createdAt, thumb}) => {

    const image = getImage(thumb);

    return(
        <NewsListItemContainer key={slug}>
            <Link to={`/aktualnosci/${slug}`}>
                <GatsbyImage image={image} alt={thumb.description} />
            </Link>
            <div>
                <p>{new Date(createdAt).toLocaleDateString('pl-PL', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})}</p>
                <h3><Link to={`/aktualnosci/${slug}`}>{title}</Link></h3>
                <p>{description}</p>
            </div>
        </NewsListItemContainer>
    )
}

export default NewsListItem;
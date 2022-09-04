import React, { useState } from "react";
import ArrowIcon from '../../../images/arrow.svg';
import Article from "./Article";
import { ArticlesListContainer, ArticlesListWrapper, NextButton, PrevButton } from "./ArticlesList.styles";
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const ArticlesList = ({articlesList}) => {

    const [currentVisibleArticle, setCurrentVisibleArticle] = useState(0);
    const { width } = useWindowDimensions();

    const increaseCurrentNews = e => {
        e.preventDefault();
        // additional -1 / -2 because slider moves 1 item ahead and last item is visible when 2nd/3rd latest item is visible too
        if(currentVisibleArticle === articlesList.length - (width <= 950 ? 2 : 3)) return setCurrentVisibleArticle(0);
        setCurrentVisibleArticle(prev => prev + 1);
    }

    const decreaseCurrentNews = e => {
        e.preventDefault();
        // additional -1 / -2 because slider moves 1 item ahead and last item is visible when 2nd/3rd latest item is visible too
        if(!currentVisibleArticle) return setCurrentVisibleArticle(articlesList.length - (width <= 950 ? 2 : 3));  
        setCurrentVisibleArticle(prev => prev - 1);
    }

    return(
        <ArticlesListContainer id='aktualnosci'>
            <h2>Aktualności</h2>
            <p>Zobacz najnowsze działania naszej firmy!</p>
            <div>
                <NextButton disabled={articlesList.length < (width <= 950 ? 3 : 4)} onClick={increaseCurrentNews} type='button'>
                    <img src={ArrowIcon} alt='Następna aktualność' />
                </NextButton>
                <PrevButton disabled={articlesList.length < (width <= 950 ? 3 : 4)} onClick={decreaseCurrentNews} type='button'>
                    <img src={ArrowIcon} alt='Poprzednia aktualność' />
                </PrevButton>
                <div>
                    <ArticlesListWrapper currentVisibleArticle={currentVisibleArticle} >
                        {articlesList.map(data => (
                            <Article key={data.title} {...data} />
                        ))}
                    </ArticlesListWrapper>
                </div>
            </div>
        </ArticlesListContainer>
    )
}

export default ArticlesList;
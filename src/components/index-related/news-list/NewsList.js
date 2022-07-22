import React, { useState } from "react";
import ArrowIcon from '../../../images/arrow.svg';
import NewsListItem from "./NewsListItem";
import { NewsListContainer, NewsContainer, NextButton, PrevButton } from "./NewsList.styles";
import useWindowDimensions from '../../../hooks/useWindowDimensions';

const NewsList = ({newsList}) => {

    const [currentNews, setCurrentNews] = useState(0);
    const { width } = useWindowDimensions();

    const increaseCurrentNews = e => {
        e.preventDefault();
        // additional -1 / -2 because slider moves 1 item ahead and last item is visible when 2nd/3rd latest item is visible too
        if(currentNews === newsList.length - (width <= 950 ? 2 : 3)) return setCurrentNews(0);
        setCurrentNews(prev => prev + 1);
    }

    const decreaseCurrentNews = e => {
        e.preventDefault();
        // additional -1 / -2 because slider moves 1 item ahead and last item is visible when 2nd/3rd latest item is visible too
        if(!currentNews) return setCurrentNews(newsList.length - (width <= 950 ? 2 : 3));  
        setCurrentNews(prev => prev - 1);
    }

    return(
        <NewsListContainer id='aktualnosci'>
            <h2>Aktualności</h2>
            <p>Zobacz najnowsze działania naszej firmy!</p>
            <div>
                <NextButton onClick={increaseCurrentNews} type='button'>
                    <img src={ArrowIcon} alt='Następna aktualność' />
                </NextButton>
                <PrevButton onClick={decreaseCurrentNews} type='button'>
                    <img src={ArrowIcon} alt='Poprzednia aktualność' />
                </PrevButton>
                <div>
                    <NewsContainer currentNews={currentNews}>
                        {newsList.map(data => (
                            <NewsListItem {...data} />
                        ))}
                    </NewsContainer>
                </div>

            </div>
        </NewsListContainer>
    )
}

export default NewsList;
import React from "react";
import { Link } from "gatsby";
import ArrowIcon from '../../../images/arrow.svg';
import Image from '../../../images/o-nas.png';
import { NewsListContainer, NewsContainer, NewsListItem, NextButton, PrevButton } from "./NewsList.styles";

const NewsList = () => {
    return(
        <NewsListContainer>
            <h2>Aktualności</h2>
            <p>Zobacz najnowsze działania naszej firmy!</p>
            <div>
                <NextButton type='button'>
                    <img src={ArrowIcon} alt='Następna aktualność' />
                </NextButton>
                <PrevButton type='button'>
                    <img src={ArrowIcon} alt='Poprzednia aktualność' />
                </PrevButton>
                <NewsContainer>
                    <NewsListItem>
                        <Link to='/aktualnosci/x'><img src={Image} alt='News'/></Link>
                        <div>
                            <p>14 Czerwca 2022</p>
                            <h3><Link to='/aktualnosci/x'>Aktualność jakaś</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia a non iure numquam sapiente! Ex beatae laudantium fugiat deleniti.</p>
                        </div>
                    </NewsListItem>
                    <NewsListItem>
                        <Link to='/aktualnosci/x'><img src={Image} alt='News'/></Link>
                        <div>
                            <p>14 Czerwca 2022</p>
                            <h3><Link to='/aktualnosci/x'>Aktualność jakaś</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia a non iure numquam sapiente! Ex beatae laudantium fugiat deleniti.</p>
                        </div>
                    </NewsListItem>
                    <NewsListItem>
                        <Link to='/aktualnosci/x'><img src={Image} alt='News'/></Link>
                        <div>
                            <p>14 Czerwca 2022</p>
                            <h3><Link to='/aktualnosci/x'>Aktualność jakaś</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia a non iure numquam sapiente! Ex beatae laudantium fugiat deleniti.</p>
                        </div>
                    </NewsListItem>
                    <NewsListItem>
                        <Link to='/aktualnosci/x'><img src={Image} alt='News'/></Link>
                        <div>
                            <p>14 Czerwca 2022</p>
                            <h3><Link to='/aktualnosci/x'>Aktualność jakaś</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia a non iure numquam sapiente! Ex beatae laudantium fugiat deleniti.</p>
                        </div>
                    </NewsListItem>
                    <NewsListItem>
                        <Link to='/aktualnosci/x'><img src={Image} alt='News'/></Link>
                        <div>
                            <p>14 Czerwca 2022</p>
                            <h3><Link to='/aktualnosci/x'>Aktualność jakaś</Link></h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quia a non iure numquam sapiente! Ex beatae laudantium fugiat deleniti.</p>
                        </div>
                    </NewsListItem>
                </NewsContainer>
            </div>
        </NewsListContainer>
    )
}

export default NewsList;
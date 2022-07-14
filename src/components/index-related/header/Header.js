import React from 'react';
import Carousel from './carousel/Carousel';
import { HeaderContainer } from './Header.styles';

const Header = ({innerRef}) => {
    return(
        <HeaderContainer ref={innerRef}>
            <div>
                <h1>OLMAX</h1>
            </div>
            <Carousel />
        </HeaderContainer>
    )
}

export default Header;
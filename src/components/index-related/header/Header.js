import React from 'react';
import Carousel from './carousel/Carousel';
import { HeaderContainer } from './Header.styles';

const Header = ({innerRef}) => {
    return(
        <HeaderContainer ref={innerRef}>
            <Carousel />
        </HeaderContainer>
    )
}

export default Header;
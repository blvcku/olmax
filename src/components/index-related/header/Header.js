import React from 'react';
import Carousel from './carousel/Carousel';
import { HeaderContainer } from './Header.styles';

const Header = () => {
    return(
        <HeaderContainer>
            <Carousel />
        </HeaderContainer>
    )
}

export default Header;
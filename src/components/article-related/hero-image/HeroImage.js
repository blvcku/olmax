import React from "react";
import { HeroImageContainer } from "./HeroImage.styles";
import Button from '../../utils/Button';

const HeroImage = ({img}) => {
    return(
        <HeroImageContainer background={img}>
            <Button to='/#aktualnosci'>Wróc do strony głównej</Button>
        </HeroImageContainer>
    )
}

export default HeroImage;